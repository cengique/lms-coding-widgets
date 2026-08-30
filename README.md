
# lms-coding-widgets: A collection of interactive programming widgets for use in learning management systems (LMSs)

This project aims to provide some bookmarks for WebAssembly (WASM) coding widgets that run completely in the browser and thus requiring no backend. Copy-paste the widget codes below to use inside LMS assessments (quizzes, assignments, etc). They have been tested in the Desire2Learn (D2L) Brightspace system.

Reference: Cengiz Gunay (2026). "Lightweight and inexpensive interactive programming widgets for providing authentic coding assessment inside your LMS". Presented at the _2026 Annual CCSC:Southeastern (CCSC:SE) Conference_ at East Tennessee State University. October 23-24, 2026. 

## Contents

1. [R](#r-coding-widget- from-rdrrio)
1. [Bash](#bash-terminal-editor)

## Examples

### R coding widget from `rdrr.io`

![](/Screenshot_rdrr_io.png)

Can be accessed from [`rrdr.io` directly](https://rdrr.io/snippets/embed/), or you can use it in an `iframe`:

<iframe width="100%" height="400" src="https://rdrr.io/snippets/embed/" frameborder="0">
</iframe>

### Bash terminal editor

![](./Screenshot_bash_dagans_faunix.png)

Live bash terminal provided by [its-a-unix-system](https://github.com/Property404/its-a-unix-system) with a [live demo](https://dagans.dev/projects/its-a-unix-system/dist/index.html). A [working example](tools/its-a-unix-system/index.html) is also included here.

You can use it in an `iframe` as well:

<iframe src="tools/its-a-unix-system/index.html" style="width: 800px;height: 600px;">
</iframe>

Other alternatives:
- [wasi-fs-access demo](https://wasi.rreverser.com/) by [Google Chrome Labs](https://github.com/GoogleChromeLabs/wasi-fs-access)
- [Wasmer + Ghostty-web](https://ghostty-web.wasmer.app/) by [wasmerio](https://github.com/wasmerio/webassembly.sh)
- [WebAssembly.sh](https://webassembly.sh/) by [Fermyon](https://developer.fermyon.com/wasm-languages/shell)

