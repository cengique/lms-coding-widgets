import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
