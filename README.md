
# lms-coding-widgets: A collection of interactive programming widgets for use in learning management systems (LMSs)

This project aims to provide WebAssembly (WASM) coding widgets that run completely in the browser and thus requiring no backend. Copy-paste the widget codes below to use inside LMS assessments (quizzes, assignments, etc). They have been tested in the Desire2Learn (D2L) Brightspace system.

Reference: Cengiz Gunay (2026). "Lightweight and inexpensive interactive programming widgets for providing authentic coding assessment inside your LMS". Presented at the _2026 Annual CCSC:Southeastern (CCSC:SE) Conference_ at East Tennessee State University. October 23-24, 2026. 

## Examples

### R coding widget from `rdrr.io`

![](/Screenshot_rdrr_io.png)

Can be accessed from [`rrdr.io`](https://rdrr.io/snippets/embed/) directly, or you can use it in an `iframe`:
```html
<iframe width="100%" height="400" src="https://rdrr.io/snippets/embed/" frameborder="0">
</iframe>
```

<iframe width="100%" height="400" src="https://rdrr.io/snippets/embed/" frameborder="0">
</iframe>

### Bash terminal editor

![](./Screenshot_bash_dagans_faunix.png)

This live bash terminal is provided by [its-a-unix-system](https://github.com/Property404/its-a-unix-system). A working example is provided [here](tools/its-a-unix-system/index.html).

```html
<iframe src="tools/its-a-unix-system/index.html" style="width: 800px;height: 600px;">
</iframe>
```
