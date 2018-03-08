var readline = require('readline');
var util = require('util');

var RL = readline.createInterface(process.stdin, process.stdout);

RL.question('What is your name? ', (name) => {
   // console.log(name);

   RL.setPrompt(`${name} how old are you? `);

   RL.prompt();

   RL.prompt();

   

   RL.on('line', (age)=> {
        if(age < 18){
                util.log(`${name.trim()} because you are more than 18 years old`);
                RL.close();
        }
        else{
            util.log(`You cannot proceed as you are not 18 years old`);
            RL.close();
        }
   });

   Rl.on('line', (age) => {
        if(age < 35){
            Rl.close();
        }else {
            Rl.close();
        }
   });
});
