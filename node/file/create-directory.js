const fs = require('fs');

if(!fs.exists("dir"))

    {
        fs.mkdir("dir", (err) => {
            fs.writeFile('./dir/newfile.html', 'This is a new directory and data', (err)=> {
                if (err) return err;
                console.log('File and directory data saved');
            });
        });
    }