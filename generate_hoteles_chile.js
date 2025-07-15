const fs = require('fs');
const path = require('path');

const templatePath = 'servicios/desarrollo-web-para-hoteles-y-turismo-en/guatemala/desarrollo-web-para-hoteles-y-turismo-en-totonicapan.html';
const template = fs.readFileSync(templatePath, 'utf8');

const regions = [
  { slug: 'antofagasta', name: 'Antofagasta' },
  { slug: 'arica-y-parinacota', name: 'Arica y Parinacota' },
  { slug: 'atacama', name: 'Atacama' },
  { slug: 'aysen', name: 'Aysén' },
  { slug: 'biobio', name: 'Biobío' },
  { slug: 'coquimbo', name: 'Coquimbo' },
  { slug: 'la-araucania', name: 'La Araucanía' },
  { slug: 'los-lagos', name: 'Los Lagos' },
  { slug: 'los-rios', name: 'Los Ríos' },
  { slug: 'magallanes', name: 'Magallanes' },
  { slug: 'maule', name: 'Maule' },
  { slug: 'nuble', name: 'Ñuble' },
  { slug: 'ohiggins', name: "O'Higgins" },
  { slug: 'region-metropolitana', name: 'Región Metropolitana' },
  { slug: 'tarapaca', name: 'Tarapacá' },
  { slug: 'valparaiso', name: 'Valparaíso' }
];

regions.forEach(r => {
  let content = template;
  content = content.replace(/Totonicapán/g, r.name);
  content = content.replace(/guatemala/g, 'chile');
  content = content.replace(/-totonicapan\.html/g, `-${r.slug}.html`);
  content = content.replace(/GT/g, 'CL');
  content = content.replace(/Ciudad de Guatemala/g, `${r.name}, Chile`);

  const outDir = path.join('servicios', 'desarrollo-web-para-hoteles-y-turismo-en', 'chile');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, `desarrollo-web-para-hoteles-y-turismo-en-${r.slug}.html`);
  fs.writeFileSync(outPath, content);
});
