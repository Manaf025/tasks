// onsole.log(" Timerlar Misalı Başladı ");


// setTimeout(() => {
//     console.log("Runs once after 1s");
// }, 1000);


// const id = setInterval(() => {
//     console.log("Tick");
// }, 500);


// setTimeout(() => {
//     clearInterval(id);
//     console.log("Interval dayandırıldı (3 saniyə keçdi)");
//     console.log("Timerlar Misalı Bitdi ");
// }, 3000);




const EventEmitter = require("events");


class Counter extends EventEmitter {
    
    inc() {
        
        this.emit("increment"); 
    }
}

const c = new Counter();


c.on("increment", () => {
    console.log("Incremented");
});


c.inc();