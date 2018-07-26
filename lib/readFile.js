const path = require('path');
const read = require('read-file');

// const file = path('./some.asc');

const readFile = (fileToRead) => {
  read(fileToRead, { encoding: 'utf-8' }, (err, buffer) => {
    console.log(buffer);
  });
}

readFile('./some.asc');

// export default readFile;