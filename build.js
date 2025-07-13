const fs = require('fs');
const CleanCSS = require('clean-css');
const terser = require('terser');

function minifyCSS(inputPath, outputPath) {
  const source = fs.readFileSync(inputPath, 'utf8');
  const output = new CleanCSS().minify(source).styles;
  fs.writeFileSync(outputPath, output);
}

async function minifyJS(inputPath, outputPath) {
  const source = fs.readFileSync(inputPath, 'utf8');
  const result = await terser.minify(source);
  fs.writeFileSync(outputPath, result.code);
}

(async () => {
  minifyCSS('styles.css', 'styles.min.css');
  await minifyJS('script.js', 'script.min.js');
})();
