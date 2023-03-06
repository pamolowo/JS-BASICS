// QUESTION ONE
/**MUTATING ARRAY METHODS: A mutable array method are methods
 *  that can change the array without necessarily creating an entirely new array
 * Generally arrays and objets have built-in mutable in javascript
 * examples are:Array.prototype.pop()
Array.prototype.push()
Array.prototype.shift()
Array.prototype.unshift()
Array.prototype.pop()
Array.prototype.splice()
 * IMMUTABLE ARRAY METHODS on the other hand create or for an entirely new array 
examples are: 
Array.prototype.slice()
Array.prototype.concat()
Array.prototype.map()
Array.prototype.filter()
 */

// QUESTION TWO

let lang =  ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
lang.push('Kotlin');
lang.splice(3,0,'Java');
lang.shift();
lang.unshift('Scala','Swift');
lang.splice(5,1,'Go','Rust');

console.log(lang);

// QUESTION THREE
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
        console.log(fruit);
        // ANSWER
        // ['apple', 'mango', 'banana']


        // QUESTION FOUR
        const myArray = [4, 5, 10, -2];
      const maxNum = ()=>  {
        let max = Math.max(...myArray);
        return max;
       };
   
let result = maxNum([myArray]);
console.log(result);
  
// QUESTION FIVE
// let arr = [1,2,3,4];
// const valTimesIndex = arr.map(function(){
//   return arr * arr.findIndex;
// });
// let newResult = valTimesIndex([arr]);
// console.log(newResult);

function valTimesIndex(arr) {
  return arr.map((val, index) => val * index);
}
// The function takes an array arr as input and uses
// the map method to create a new array with each element of arr multiplied by its index.
// The map method takes a function as argument that receives two parameters: 
// the current value of the array (val) and its index (index). 
// The function returns the product of val and index,
//  which becomes the corresponding element of the new array.



const arr = [1, 2, 3, 4, 5];
const res = valTimesIndex(arr);
console.log(res);
 // [0, 2, 6, 12, 20]
// In this case, the input array is [1, 2, 3, 4, 5],
//  and the output array is [0, 2, 6, 12, 20], 
//  which corresponds to [1*0, 2*1, 3*2, 4*3, 5*4].