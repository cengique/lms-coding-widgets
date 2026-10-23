import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

let deck = new Reveal({
  plugins: [Markdown, RevealHighlight],

  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
  width: 1280, // 960
  height: 720, // 700

  // Factor of the display size that should remain empty around the content
  margin: 0.1,
  
  // Link to each page
  history: true,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 1.5,

  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js',
      async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    // MathJax
    { src: 'plugin/math/math.js', async: true }
  ]

});
deck.initialize();
