
const tabl = () => { // in this step we create arrow function
  let firstStr = ''; //create first empty strike in order for all the results to be written down in a line
  for (let i = 2; i < 11; i += 1) { //start the first loops to count numbers
    let  secondStr = ''; //create second empty strike for to record the result
    for (let y = 2; y < 11; y += 1) { //start the second loop to create a number for a degree
      secondStr += `${i**y}|`; //assign for empry strike interpolation, in which we raise a number to a power
    }
    firstStr += secondStr + '\n'; //assigin to first emptr strike second strike and add break sign for the strike
  }
  console.log(firstStr); // output the result to rhe console
}
tabl() //start function, buddy
