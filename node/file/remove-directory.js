const fs = require('fs');

/* Method to remove directory */
//fs.rmdirSync('./newDir');

/* Method to remove file inside a given directory */


fs.unlinkSync('./newDir/newfile.js');