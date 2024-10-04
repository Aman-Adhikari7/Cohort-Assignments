const fs = require('fs')

const data = 'This is the content to be written to the file.';

fs.writeFile('a.txt', data, 'utf8', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File written successfully!');
    }
});