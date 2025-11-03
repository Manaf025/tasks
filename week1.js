
//1
console.log("Hello, JavaScript");






const firstName = "Ali";
const lastName = "Huseynov";


const fullName = `${firstName} ${lastName}`;
console.log("Full name:", fullName);




//5
let movies = ["Inception", "Matrix", "Avatar", "Titanic", "Joker"];
console.log("Movies:", movies);


movies.push("Interstellar");


movies.pop();


console.log("Final movies list:", movies);



//6
const score = 85;
if(score >= 90)
{
  console.log("A");
} else if(score >= 80){
  console.log("B");
} else {
  console.log("C or below");
}



// 7
console.log("Numbers 1 to 20:");
for(let i=1; i<=20; i++){
  console.log(i);
}

console.log("Even numbers 1 to 20:");
for(let i=1; i<=20; i++){
  if(i % 2 === 0){
    console.log(i);
  }
}


