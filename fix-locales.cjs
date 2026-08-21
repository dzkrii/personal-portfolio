const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/pathFor\(locale,\s*/g, 'pathFor(');
      content = content.replace(/locale === "id" \? "[^"]+" : ("[^\"]+")/g, '$1');
      content = content.replace(/locale === 'id' \? '[^']+' : ('[^']+')/g, '$1');
      content = content.replace(/locale === "id" \? "([^"]+)" : "([^"]+)"/g, '"$2"');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}
replaceInDir('./src');
