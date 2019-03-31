The markdown files for this example live in the directory **markdownFiles**, inside the **static** folder.

They are imported using webpack's import capability and loadered with the markdown-it module via [Nuxt.js modules](https://github.com/nuxt-community/modules).

This content you are reading at this very moment is actually a markdown file. It's titled home.md and can find it in the **markdownFiles** directory.

Inside the **markdownFiles** directory, you will find 2 other files
<ul>
  <li style="text-align: left">testone.md</li>
  <li style="text-align: left">testtwo.md</li>
</ul>

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```
