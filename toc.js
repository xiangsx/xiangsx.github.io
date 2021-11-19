const fs = require('fs');
const path = require('path');
const child_process = require('child_process')

if (!process.argv[2]) {
    console.error('yarn toc [dirname]');
    process.exit(0);
}
const inputDir = path.join(__dirname, process.argv[2]);

const list = [];
function listFile(dir) {
    const arr = fs.readdirSync(dir);
    arr.forEach(function (item) {
        const fullpath = path.join(dir, item);
        const stats = fs.statSync(fullpath);
        if (stats.isDirectory()) {
            listFile(fullpath);
        } else {
            list.push(fullpath);
        }
    });
    return list;
}

listFile(inputDir);
console.log(list.join('\n'));

for (const filePath of list) {
    if (path.extname(filePath).match(/\.md/i)) {
        child_process.exec(`markdown-toc -i ${filePath}`, (err,...rest) => {
            if (err) {
                console.error(err, rest);
            }
        });
    }
}

