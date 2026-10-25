# CommentBookmarks

Do you know `// TODO: comments`? This VSCode-Extension makes use of the kind of schema, to add Bookmarks to your Code. Then allows you to jump to different Bookmarks inside the current open File.

## Features

This Extension just adds one new command: **BM**

It will search your currently open Editor for comments, that start with ` BM: `.

https://github.com/Rocco-Gossmann/VSCode-CommentBookmarks/assets/127580387/8c8c8885-b223-45be-a35f-569eb56343ba

Example Comments:
```c++
// BM: my Class
```
```html
<!-- BM: my Paragraph -->
```
```lua
-- BM: My Lua comment
```

## Known Issues
- If you use Smooth-Scrolling, the line may not appear until you navigate with the cursor.
No idea how to prevent this. VSCode-Docs are little helpfull in that regard

- despite `revealRange` being told to reveal the selected bookmark-line in the center of the screen, it still does what it wants.
Maybe Micro$lop will fix their god damn APIs some day.


## Release Notes
### 0.2.1
- cleaner line selection

### 0.2.0
- Added support for PHP-Smarty comments
- Removed the End of Block-Comments from the Bookmark-Text
- Lowered VSCode Version requirements to 1.88.0

### 0.1.0
- Made Bookmark detection more reliable

### 0.0.1
- Initial release


