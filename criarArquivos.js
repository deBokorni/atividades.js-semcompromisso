const fs = require('fs');
const path = require('path');

const dir = path.dirname(__filename);

for (let i = 1; i <= 30; i++) { 
    const fileName = `quest${i}.js`;
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, '', 'utf8');
}