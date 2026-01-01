# Draggable Table Columns Plugin

A lightweight jQuery plugin that enables drag-and-drop functionality to reorder HTML table columns. Perfect for data-heavy applications where column organization is important.

## Repository Name

**`draggable-table-columns`** - Simple, descriptive, and SEO-friendly

## Features

✨ **Easy to Use** - Just add a class to make columns draggable
🎯 **Flexible** - Control which columns are draggable with a simple class
💾 **Persistent** - Column order is saved to localStorage and restored on page reload
🎨 **Visual Feedback** - Smooth animations and clear visual indicators during dragging
⚡ **Lightweight** - No external dependencies beyond jQuery
📱 **Browser Compatible** - Works across all modern browsers supporting HTML5 Drag and Drop API

## Installation

### Option 1: Direct Include

```html
<script src="path/to/dragndrop.table.columns.js"></script>
```

### Option 2: NPM (if published)

```bash
npm install draggable-table-columns
```

## Usage

### Basic Setup

1. **Add the script to your page:**
```html
<script src="dragndrop.table.columns.js"></script>
```

2. **Add the `draggable-column` class to columns you want to reorder:**
```html
<table id="my-table">
  <thead>
    <tr>
      <th>Timeline</th>
      <th class="draggable-column">Shift A</th>
      <th class="draggable-column">Shift B</th>
      <th class="draggable-column">Shift C</th>
      <th>Total</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>08:00</td>
      <td>5</td>
      <td>3</td>
      <td>7</td>
      <td>15</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
```

3. **Initialize the plugin:**
```javascript
$(document).ready(function() {
  $('#my-table').draggableTableColumns({
    storageKey: 'myTableColumnOrder'
  });
});
```

### Columns with Data Attributes

For better tracking, add a `data-shift-id` (or any identifier) to your columns:

```html
<th class="draggable-column" data-shift-id="123">
  Shift Name
</th>
```

## Configuration Options

```javascript
$('#my-table').draggableTableColumns({
  // CSS class applied when dragging
  dragClass: 'dragging',
  
  // CSS class applied to drop target
  dragOverClass: 'drag-over',
  
  // localStorage key for saving column order
  storageKey: 'tableColumnOrder',
  
  // CSS selector for draggable columns
  draggableSelector: '.draggable-column'
});
```

## CSS Customization

The plugin comes with default styles, but you can customize them:

```css
/* Draggable column styling */
.table th.draggable-column {
  cursor: grab;
  transition: all 0.2s ease;
}

.table th.draggable-column:active {
  cursor: grabbing;
}

/* While dragging */
.table th.dragging {
  opacity: 0.5;
  background-color: rgba(100, 150, 200, 0.6);
}

/* Drag over target */
.table th.drag-over {
  background-color: rgba(100, 150, 200, 0.9);
  box-shadow: inset 0 -3px 0 0 #fff;
  border-left: 3px solid #fff;
}
```

## How It Works

### What's Draggable?
- Only columns with the `draggable-column` class can be dragged
- Columns without this class remain stationary

### What Gets Reordered?
- Both header cells (`<th>`) and body cells (`<td>`) in the same column
- All rows are updated to maintain table integrity

### Data Persistence
- Column order is automatically saved to localStorage
- Use the `storageKey` option to namespace storage keys
- Order is restored on page reload

## Example: Laravel Livewire Integration

```blade
<table class="table" id="driver-plan-table">
  <thead class="table-dark">
    <tr>
      <th>Timeline</th>
      @foreach($plan?->shifts ?? [] as $shift)
        <th class="draggable-column" data-shift-id="{{ $shift->id }}">
          {{ $shift->title }}
        </th>
      @endforeach
      <th>Total</th>
      <th>Active</th>
    </tr>
  </thead>
  <tbody>
    <!-- Your rows -->
  </tbody>
</table>

@push("scripts")
  <script src="{{ asset('/plugins/drag/dragndrop.table.columns.js') }}"></script>
  <script>
    $(document).ready(function() {
      $('#driver-plan-table').draggableTableColumns({
        storageKey: 'driverAreaPlanTable-' + '{{ $date }}'
      });
    });
  </script>
@endpush
```

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ❌ Not supported |

## API Reference

### Methods

#### Initialize Drag and Drop
```javascript
$('#table-id').draggableTableColumns(options);
```

### Events

The plugin triggers standard drag events on the table:
- `dragstart` - When user starts dragging
- `dragover` - When dragging over a target
- `dragleave` - When leaving a drop target
- `drop` - When dropping on a target
- `dragend` - When drag operation completes

## Limitations

- Requires jQuery library
- Requires HTML5 Drag and Drop API support
- Does not work with merged table cells (`colspan`, `rowspan`)
- Mobile touch events are not supported (HTML5 Drag and Drop has limited mobile support)

## Troubleshooting

### Columns not dragging?
- Ensure the `draggable-column` class is added to column headers
- Check that jQuery is loaded before the plugin script
- Verify the table ID matches your selector

### Column order not saving?
- Check browser localStorage is enabled
- Verify the `storageKey` option is set
- Check browser console for JavaScript errors

### Styles not applying?
- Ensure CSS is loaded after the plugin initialization
- Check for CSS conflicts with existing styles
- Verify class names match your CSS

## Performance Considerations

- The plugin is optimized for tables with up to 50 columns
- For larger tables, consider virtualizing columns
- localStorage limit is typically 5-10MB per domain

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License

**MIT License** - You are free to:
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute the plugin
- ✅ Use privately
- ❌ Hold liable (without warranty)

See LICENSE file for full details.

## Author

**Islam H Alalfy**
- Website: [alalfy.com](https://alalfy.com)
- GitHub: [@islamalalfy](https://github.com/islamalalfy)

## Changelog

### v1.0.0 (Initial Release)
- Initial release with basic drag and drop functionality
- localStorage persistence
- CSS class-based configuration

## Support

For issues, questions, or suggestions, please:
1. Check existing [issues](https://github.com/islamalalfy/draggable-table-columns/issues)
2. Create a new issue with detailed information
3. Include browser version and table structure details

## Related Projects

- [SortableJS](https://sortablejs.github.io/Sortable/) - Advanced sorting library
- [DataTables](https://datatables.net/) - Advanced table plugin
- [ag-Grid](https://www.ag-grid.com/) - Enterprise data grid

---

**Made with ❤️ by Islam H Alalfy**

