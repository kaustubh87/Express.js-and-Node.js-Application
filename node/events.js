const events = require('events');
let emitter = new events.EventEmitter();

emitter.on('newEvent', (message) => {
    console.log(`Message: , ${message}`);
});
