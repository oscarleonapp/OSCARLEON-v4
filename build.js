const fs = require('fs');
const { minify } = require('terser');
const CleanCSS = require('clean-css');

async function buildJS(input, output) {
  const code = fs.readFileSync(input, 'utf8');
  const result = await minify(code);
  fs.writeFileSync(output, result.code, 'utf8');
}

function buildCSS(input, output) {
  const source = fs.readFileSync(input, 'utf8');
  const outputCss = new CleanCSS().minify(source).styles;
  fs.writeFileSync(output, outputCss, 'utf8');
}

(async function() {
  await buildJS('script.js', 'script.min.js');
  buildCSS('styles.css', 'styles.min.css');
})();
