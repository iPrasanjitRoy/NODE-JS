const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log('Please Turn Off The Motor!');
    setTimeout(() => {
        console.log('Please Turn Off The Motor! Its a Gentle Reminder');
    }, 3000);
});


console.log("The Script is Running");
myEmitter.emit('WaterFull');
console.log("The Script is Still Running");


