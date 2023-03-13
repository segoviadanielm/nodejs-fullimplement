// TODO
import EventEmitter from 'events';

const emitter = new EventEmitter();


emitter.on('start', () => {
    // throw new Error("can't started") //this throw err and breaks the app
    console.log('started');
});
// emitter.addListener('start', ()=> console.log('started'));

console.log('eventNames', emitter.eventNames());
console.log('listeners', emitter.listeners('start'))
console.log('listenerCount', emitter.listenerCount('start'));
emitter.setMaxListeners(20);

emitter.prependOnceListener('start', () => console.log('start before anything')); //use to append listeners on the start of listener's array
// like once, but with once... like prependListener

emitter.on('error', (err) => {
    console.log('an error ocurred:', err.message);
});


// we can handle an error with err event
emitter.emit('start');

emitter.emit('error', new Error('chicken in a lake'));



/**
 * Nodejs rejection aplication
 */

const emitter2 = new EventEmitter({captureRejections: true});

emitter2.on('start', async () => {
    throw new Error('chicken in a lake');
})

emitter2[Symbol.for('nodejs.rejection')] = console.log;
emitter2.emit('start');

console.log('pre nextTick()'); // this will console and then the error

const emitter3 = new EventEmitter({captureRejections: true});

emitter3.on('start', () => {
    console.log('duck in a lake');
})

emitter3.on('start', () => {
    throw new Error('chicken in a lake');
})
//this always works properly
try {
    emitter3.emit('start');

}
catch(err) {
    console.log('on catch sync', err.message);
    
    console.log(emitter3.listeners('start'));
    
    emitter3.removeListener('start', () => console.log('remove listener')); //removes the last added instance of event
    //emitter3.of('start', () => console.log('remove listener'))

    // emitter3.removeAllListeners('start'); //will remove all instances of this event


    console.log(emitter3.listeners('start'));
    
}


//TODO - RAW LISTENERS - CAPTUREREJECTIONSYMBOL - ERROR MONITOR - ABORT SIGNAL - PROMISE ALL/RACE - STOP PROPAGATION