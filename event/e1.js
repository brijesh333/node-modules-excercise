const eventEmitter = require('events');

let event = new eventEmitter();

event.on('event1',function(param){
    console.log('Event-1 emitted with parameter ' + param);
    event.emit('event2','e2');
})

event.on('event2',function(param){
    console.log('Event-2 emitted with parameter ' + param);
})

event.emit('event1','e1');