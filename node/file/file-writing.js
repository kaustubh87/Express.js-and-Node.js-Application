const fs = require('fs');


fs.writeFile('data.html', 'This is a text file', 'UTF-8', (err) => {
    if(err) return err;
    console.log('The file has been saved');
});

fs.appendFile('data.html','Wrote this using append function', 'UTF-8', (err)=>{
    if(err) return err;
    console.log('The file has been appended');
});