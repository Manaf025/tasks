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




// const EventEmitter = require("events");


// class Counter extends EventEmitter {
    
//     inc() {
        
//         this.emit("increment"); 
//     }
// }

// const c = new Counter();


// c.on("increment", () => {
//     console.log("Incremented");
// });


// c.inc();

// const readline = require("readline");


// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question("Sizin adınız nədir? ", (name) => {
    
   
//     console.log(`Salam, ${name}! Səninlə tanış olmağıma şadam.`)

    
//     rl.close();
// });

// 1. Sadə, asinxron funksiya (Söz qaytarır)
// Uğursuzluq ehtimalını (Math.random) kənara qoyuruq ki, kod daha statik olsun.
// Bu nümunədə FƏRZ EDƏK ki, həmişə UĞURSUZLUQ baş verir.
function getFailPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Məlumat əldə edilmədi!"));
        }, 1000); 
    });
}

// 2. Əsas funksiya: try/catch ilə xətanı tutur
async function startProcess() {
    console.log("Əməliyyat başladı...");
    
    try {
        // Uğursuz olacağı gözlənilən funksiyanı çağırırıq
        const result = await getFailPromise(); 
        
        // Uğurlu olarsa, buraya düşəcək
        console.log("Uğur:", result);
        
    } catch (error) {
        // Uğursuz olarsa, xəta buraya düşəcək
        console.error("🛑 Xəta tutuldu!");
        console.error("Məlumat:", error.message);
        
    } finally {
        console.log("--- Əməliyyat başa çatdı. ---");
    }
}

// İcra
startProcess();