/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(num1, num2){
  if (num1 > num2){
    return num2;
  }
  else {
    return num1;
  }

}
var promptInput1 = prompt("Input a 1-digit number");
var promptInput2 = prompt("Input another 1-digit number");
console.log(minimum(promptInput1, promptInput2));



// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(num1, num2, num3){
  if (num1 < num2 && num1 < num3){
    return num1 + " is the smallest number you entered."
  } else if (num1 > num2 && num2 < num3) {
    return num2 + " is the smallest number you entered."
  } else if (num3 < num1 && num3<num2) {
    return num3 + " is the smallest number you entered."
  } else {
    return "I don't know what's going on."
  }
  }
console.log(minimum3(9,8,7));
console.log(minimum3(3,9,4));
console.log(minimum3(1,8,1));
console.log(minimum3(3,3,9));


// 3. Declare a function called sum() that takes an array of numbers as an
//argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(array){
  var adding = 0
  for (i=0; i<array.length; i++){
    adding += array[i];
  }
  return adding + " is your total.";
}
var applessauce = [1,2,3,4];
console.log(sum(applessauce));




// 4. Declare a function called multiply() that takes an array of numbers
//and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(arrayNum){
  var product = 1
  for (i=0; i<arrayNum.length; i++){
    product *= arrayNum[i];
  }
  return "The product of your array is " + product + "."
}

var hopscotch = [1,2,3,4]
console.log(multiply(hopscotch));



// 5. Write a function called filterSixPlus() that takes the following
//array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(thingsArray){
  for (i=0; i<thingsArray.length; i++){
    if (thingsArray[i].length < 6) {
      thingsArray.splice(i, 1);
      i--;
    }

    //why does this extra bit make the fx not work? [i.e., returns "cup"]
    //else {
      //return thingsArray
    //}
  }
return thingsArray
}

console.log(filterSixPlus(words));




// 6. Use a function to ask a user for a temperature in Celsius and
//converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's
//string input to a float.

function tempConvert(){
  
}




// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.




// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()





// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.






// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.






// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.






// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.
