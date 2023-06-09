const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull',()=>{
    console.log('Please turn off the motor!');
    setTimeout(()=>{
        console.log("Please turn off the motor! Its a gentle reminder");
    },3000);
});
for(let i = 0; i<10;i++){
    console.log('The script is running');
console.log("The script is still running");
}
myEmitter.emit('WaterFull');
console.log("The script is still running")