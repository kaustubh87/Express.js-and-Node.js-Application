const events = require('events');


let emitter = new events.EventEmitter();

emitter.on('newEvent', (message) => {
    console.log(`Message: , ${message}`);
});

emitter.emit('newEvent', 'Hello This is Kvin');
emmiter.emit('new Event');
emitter.emit('new Event 2');