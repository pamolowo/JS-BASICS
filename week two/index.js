let studentGroup = 'Science';

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';



if (studentGroup === 'scienceSubjects') {
    console.log(`Congrats you are to take the following subjects ${scienceSubjects}`);
} else if (studentGroup === 'socialScienceSubjects' ){
    console.log(`Congrats you are to take the following subjects ${socialScienceSubjects}`);
}
else  if (studentGroup === 'artsSubjects'){
    console.log(`Congrats you are to take the following subjects ${artsSubjects}`);
}
else if (studentGroup != 'scienceSubjects'  && studentGroup != 'socialScienceSubjects' && studentGroup != 'artsSubjects' ){
    console.log(`Congrats you are to take the following subjects ${generalSubjects}`);
}
else {
    console.log('You have made an invalid selection');
}







// console.log(pwr);
// if (pwr === positiveNum) {
//     let result = pwr - 2 ;
//     console.log( `The number ${result} is the power of 2 nearest to ${positiveNum}.`)
// } else {
//     console.log(`The number ${pwr} is the power of 2 nearest to ${positiveNum}.`)
// }




// // const num = parseInt(prompt("Enter a positive number: "));
// let num = 50;

// const pwr = Math.pow(2, Math.round(Math.log2(num)));

// console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
let num = 70;
let pwr = 1;

while (pwr < num) {
  pwr *= 2;
}

console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  
      
  







