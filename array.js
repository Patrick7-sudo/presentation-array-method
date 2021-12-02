//total array based on w3 school = 33
//array method we have learnt =14
    //concat, join, sort, every, map, splice, filter, pop, unshift, forEach, push, shift, splice, some

// we will be discussing 8 extra array.
// Mirella
// toString & reverse
// What does toString do? It converts to a string
// What does reversing do? It make something the opposite of what it was. E.g To reverse 47, the reverse number is 74.
// How to convert and reverse a number using the toString & reverse

// 
// To reverse a number, we should convert the number to a string - Done
let number = 47

let aString = number.toString(); // The output should be "47" - Done
// console.log(aString);
// Our value has been converted from a number to a string
// Before reversing, we need to split and turn it into an array. 
let split = aString.split('');  // output should be ['4', '7']
// console.log(split);
let reverse = split.reverse() //, output should be ['7', '4']
 //console.log(reverse);
// We need to join the string
let join = reverse.join('') //  output returns '74'
//console.log(join);
// we can use parseInt to convert back to number from a string
let turnBack = parseInt(join)
// console.log(turnBack); // It works!

// we can refactor the code?
let aStringf = number.toString().split('').reverse().join('');
// console.log(aStringf) // Returns a string
let turnItBack = parseInt(aStringf)
 // console.log(turnItBack) // Returns a number



/* Dov

    .indexOf()
        The indexOf() method returns the first index at which a given 
        element can be found in the array, or -1 if it is not present. 
    .lastIndexOf()
        The array is searched backwards, starting at fromIndex. 
 */            
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.indexOf('Dodo'));

// console.log(animals.lastIndexOf('Dodo'));



// Tasniim
// reduce & reduceRight
const numbers = [175, 50, 25];


// Reduce 
    //the values of an array to a single value (going left-to-right)
    
    // const num = numbers.reduce(myFunc);

    // function myFunc(total, num) {
    //   return total - num;
    // }

    // console.log(num)

//reduceRight
    //the values of an array to a single value (going left-to-right)

    // const numRight = numbers.reduceRight(getSum);

    // function getSum(total, num) {
    //   return total - num;
    // }

    // console.log(numRight)


// Leah
// includes & valueOf

    // .includes()) - the return value is a boolean (true or false)
    // const team = ["Tasniim", "Mirella", "Leah", "Dov"];
    //console.log(team.includes("Liz")); 
        // Returns false because Liz is not in our team

    //console.log(team.includes("dov")); 
        // Returns false - includes is case sensitive - value must be how it appears in the array

    // console.log(team.includes("Dov")); 
        // Returns true because Dov is in our team
        
    // You can take in the parameters of the element and the position. 
        // The default position is 0.
        
    // console.log(team.includes("Tasniim", 0));
        // True because Tasniim is at position 0
    // console.log(team.includes("Tasniim", 1));
        // False because Tasniim is not at position 1, it's Mirellla
    // console.log(team.includes("Mirella", 2));
        // False because Mirella is not at position 2, she's at position 1

    // .valueOf() - Basically returns the array
    // const teamAgain = ["Tasniim", "Mirella", "Leah", "Dov"];
    // const inTeam = teamAgain.valueOf();
    // console.log(inTeam);


    // Great work, room 7! :D