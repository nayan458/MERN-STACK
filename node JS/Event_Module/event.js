// Events MOdule
// node.js has  abuild -in module, class "Events",
// where you can create-, fire-, and for-your own events.

// Example 1-registering for the event to be fired only one time using once.

// Example 2-create an event emitter instance and register a couple of callBacks

// Example 3-Registering for the event with callback parameters

// // const event = require("events");
// // const EventEmitter = new event.EventEmitter();


const EventEmitter = require("events");

const event = new EventEmitter();    // object of event

// // // event.on('sayMyName',() =>{
// // //     console.log("your name is Nayan");
// // // })

// // // event.emit('sayMyName');

// // event.on('sayMyName',() =>{
// //     console.log("your name is nayan");
// // })

// // event.on('sayMyName',() =>{
// //     console.log("your name is moni");
// // })

// // event.on('sayMyName',() =>{
// //     console.log("your name is Baruah");
// // })

// // event.emit('sayMyName');

// event.on("checkPage",(sc, msg)=>{
//     console.log(`stattus code is ${sc} and ${msg}`);
// })

// event.emit('checkPage',200,"ok");