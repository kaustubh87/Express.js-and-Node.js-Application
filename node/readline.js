var readline = require('readline');

var RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name) => {
   // console.log(name);

   RL.setPrompt(`${name} how old are you? `);

   RL.prompt();

   RL.on('line', (age)=> {
        if(age < 18){
            
        }
   });
});