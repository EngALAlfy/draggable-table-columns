# draggable-table-columns

A lightweight jQuery plugin that enables drag-and-drop functionality to reorder HTML table columns. Perfect for data-heavy applications where column organization is important.

## 🎯 Features

✨ **Easy to Use** - Just add a class to make columns draggable
🎯 **Flexible** - Control which columns are draggable with a simple class
💾 **Persistent** - Column order is saved to localStorage and restored on page reload
🎨 **Visual Feedback** - Smooth animations and clear visual indicators during dragging
⚡ **Lightweight** - No external dependencies beyond jQuery
📱 **Browser Compatible** - Works across all modern browsers supporting HTML5 Drag and Drop API

## 🚀 Quick Start

### 1. Include Files

```html
<link href="draggable-table-columns.css" rel="stylesheet">
<script src="dragndrop.table.columns.js"></script>
```

### 2. Add Class to Draggable Columns

```html
<table id="my-table">
  <thead>
    <tr>
      <th>ID</th>
      <th class="draggable-column">Name</th>
      <th class="draggable-column">Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <!-- rows -->
  </tbody>
</table>
```

### 3. Initialize

```javascript
$(document).ready(function() {
  $('#my-table').draggableTableColumns({
    storageKey: 'myTableOrder'
  });
});
```

## 📖 Documentation

- [Full README](./README.md)
- [Live Demo](https://islamalalfy.github.io/draggable-table-columns/demo.html)
- [Configuration Options](#configuration-options)

## Configuration Options

```javascript
$('#my-table').draggableTableColumns({
  dragClass: 'dragging',              // CSS class while dragging
  dragOverClass: 'drag-over',         // CSS class for drop target
  storageKey: 'tableColumnOrder',     // localStorage key
  draggableSelector: '.draggable-column'  // Selector for draggable columns
});
```

## 🎨 CSS Classes

- `.draggable-column` - Marks a column as draggable
- `.dragging` - Applied during drag operation
- `.drag-over` - Applied to drop target
- `.non-draggable-column` - Explicitly mark as non-draggable

## 💾 Persistent Storage

Column order is automatically saved to localStorage using the `storageKey` option. The order is restored on page reload.

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ❌ Not supported |

## 📦 Files

- `dragndrop.table.columns.js` - Main plugin file
- `draggable-table-columns.css` - Styling and animations
- `demo.html` - Interactive demo
- `README.md` - Full documentation
- `LICENSE` - MIT License

## 🔧 Integration Example

```html
<table class="table" id="my-table">
  <thead>
    <tr>
      <th>ID</th>
      <th class="draggable-column">Name 1</th>
      <th class="draggable-column">Name 2</th>
    </tr>
  </thead>
  <tbody>
    <!-- rows -->
  </tbody>
</table>

  <script src="dragndrop.table.columns.js"></script>
  <script>
    $(document).ready(function() {
      $('#my-table').draggableTableColumns({
        storageKey: 'myTable'
      });
    });
  </script>
```
## 📝 License

MIT License - You are free to use, modify, and distribute this plugin. See [LICENSE](./LICENSE) file for full details.

## 👨‍💻 Author

**Islam H Alalfy**
- Website: [alalfy.com](https://alalfy.com)
- GitHub: [@islamalalfy](https://github.com/engalalfy)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## Changelog

### v1.0.0 (Initial Release)
- Initial release with drag and drop functionality
- localStorage persistence
- CSS class-based configuration
- Complete CSS styling with animations
- Interactive demo page

---

**Made with ❤️ by Islam H Alalfy**

