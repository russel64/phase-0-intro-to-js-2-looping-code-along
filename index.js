// Code your solutions in this file


function writeCards(cardNames){
    let newCardNames = [];
    for (let i = 0; i <cardNames.length; i++){
        newCardNames.push(`Thank you, ${cardNames[i]}, for the wonderful surprise gift!`);
    }
    return newCardNames;
}

console.log(writeCards(newCardNames));


/*function countDown(num1){
  for (let i = 10; i > 0; i --){
   num1.push(i);
  }
  return num1;
}*/

function countDown(n){
    let i = n;
    while (i > -1){
        console.log(i)
        i--;
        }
        return i;
    }
console.log(countdown());


