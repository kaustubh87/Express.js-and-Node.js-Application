const fs = require('fs');


fs.writeFile('data.html', 'This is a text file', 'UTF-8', (err) => {
    if(err) return err;
    console.log('The file has been saved');
})