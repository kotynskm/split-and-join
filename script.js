// turn a string into an array using split method
let string = "thiebendiouzy";
let array = string.split("");

let letter = "";
let removedArray = [];

// loop through array
for(let i = 0; i < array.length; i++){
  // set letter to array at i
  letter = array[i];
  // if the letter is not aeiou then add it to the result array
  if(letter != "a" && letter != "e" && letter != "i" && letter != "o" && letter != "u") 
    removedArray.push(array[i]);                           
}

// turn the array back into a string using join method
let newString = removedArray.join("");
console.log(removedArray);
console.log(newString);