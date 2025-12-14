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