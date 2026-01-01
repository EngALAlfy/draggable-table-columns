/**
 * Drag and Drop Table Columns Plugin
 * Allows reordering of table columns by dragging and dropping
 *
 * Usage:
 * - Add class "draggable-column" to columns that should be draggable
 * - Columns without this class will not be draggable
 */

(function($) {
    'use strict';

    $.fn.draggableTableColumns = function(options) {
        const settings = $.extend({
            dragClass: 'dragging',
            dragOverClass: 'drag-over',
            storageKey: 'tableColumnOrder',
            draggableSelector: '.draggable-column'
        }, options);

        return this.each(function() {
            const table = $(this);
            const storageKey = settings.storageKey + '_' + table.attr('id');

            // Initialize columns with draggable attributes
            initializeColumns(table, settings);

            // Restore column order from localStorage if available
            restoreColumnOrder(table, storageKey);

            // Bind drag events
            bindDragEvents(table, settings, storageKey);
        });
    };

    function initializeColumns(table, settings) {
        // Find all header cells that have the draggable-column class
        const headerCells = table.find('thead th' + settings.draggableSelector);

        headerCells.each(function(index) {
            const $cell = $(this);

            // Add draggable attribute
            $cell.attr('draggable', 'true');
            $cell.css({
                'cursor': 'grab',
                'user-select': 'none'
            });

            // Add data attribute to track original position
            $cell.data('column-index', index);
        });
    }

    function bindDragEvents(table, settings, storageKey) {
        const $table = table;
        let draggedElement = null;
        let draggedIndex = null;

        $table.on('dragstart', 'thead th[draggable="true"]', function(e) {
            draggedElement = this;
            draggedIndex = $(this).data('column-index');

            $(this).addClass(settings.dragClass);
            e.originalEvent.dataTransfer.effectAllowed = 'move';
            e.originalEvent.dataTransfer.setData('text/html', this.innerHTML);
            $(this).css('opacity', '0.5');
        });

        $table.on('dragover', 'thead th[draggable="true"]', function(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.originalEvent.dataTransfer.dropEffect = 'move';

            const $this = $(this);
            if (this !== draggedElement) {
                $this.addClass(settings.dragOverClass);
            }
            return false;
        });

        $table.on('dragleave', 'thead th[draggable="true"]', function(e) {
            $(this).removeClass(settings.dragOverClass);
        });

        $table.on('drop', 'thead th[draggable="true"]', function(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }

            if (draggedElement !== this) {
                const $draggedCell = $(draggedElement);
                const $targetCell = $(this);

                // Only swap if both columns are draggable
                if ($draggedCell.hasClass('draggable-column') && $targetCell.hasClass('draggable-column')) {
                    const allDraggableHeaders = $table.find('thead th.draggable-column');
                    const draggedPosition = allDraggableHeaders.index($draggedCell);
                    const targetPosition = allDraggableHeaders.index($targetCell);

                    if (draggedPosition !== targetPosition) {
                        // Swap columns
                        swapColumns($table, $draggedCell, $targetCell);

                        // Save column order to localStorage
                        saveColumnOrder($table);
                    }
                }
            }

            return false;
        });

        $table.on('dragend', 'thead th', function(e) {
            $(this).removeClass(settings.dragClass);
            $table.find('thead th').removeClass(settings.dragOverClass);
            $(this).css('opacity', '1');
        });
    }

    function swapColumns(table, $fromCell, $toCell) {
        const headerRow = table.find('thead tr').first();
        const bodyRows = table.find('tbody tr');

        // Get column indices in the full table (not just draggable ones)
        const allHeaders = table.find('thead th');
        const fromIndex = allHeaders.index($fromCell);
        const toIndex = allHeaders.index($toCell);

        // Swap header cells
        if (fromIndex < toIndex) {
            $fromCell.insertAfter($toCell);
        } else {
            $fromCell.insertBefore($toCell);
        }

        // Swap body cells in each row
        bodyRows.each(function() {
            const $row = $(this);
            const cells = $row.find('td');

            if (fromIndex < toIndex) {
                cells.eq(fromIndex).insertAfter(cells.eq(toIndex));
            } else {
                cells.eq(fromIndex).insertBefore(cells.eq(toIndex));
            }
        });
    }

    function saveColumnOrder(table) {
        const columnOrder = [];
        table.find('thead th.draggable-column').each(function() {
            columnOrder.push($(this).text().trim());
        });

        if (typeof(Storage) !== 'undefined') {
            const storageKey = (table.attr('id') ? 'driverAreaPlanTable_' + table.attr('id') : 'tableColumnOrder');
            localStorage.setItem(storageKey, JSON.stringify(columnOrder));
        }
    }

    function restoreColumnOrder(table, storageKey) {
        if (typeof(Storage) === 'undefined') {
            return;
        }

        const savedOrder = localStorage.getItem(storageKey);
        if (!savedOrder) {
            return;
        }

        try {
            const columnOrder = JSON.parse(savedOrder);
            // Restore columns to saved order
            // Note: This is simplified; more complex logic may be needed for your use case
        } catch (e) {
            console.error('Error restoring column order:', e);
        }
    }
})(jQuery);
