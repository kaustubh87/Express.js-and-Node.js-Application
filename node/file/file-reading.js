const fs = require('fs');

fs.readdir('../../node', (err, content) => {
    if(err){
        return err;
    }

    console.log(content);
});

fs.readFile('../modules/sendemail.js', 'UTF-8', (err, content)=> {
    if(err) return err;
    console.log(content);
});