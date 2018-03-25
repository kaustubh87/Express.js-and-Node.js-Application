const fs = require('fs');

/* Renaming files inside the directory */

fs.renameSync('./newDir/newfile2.html', './newDir/newfile3.html');

/* Moving and renaming directories */

fs.renameSync('./dir/childDir', './parentDir');