// This function is use return the unique elements from the array.
// you can run this code by 'node arrayManipulation.js'.

function getUniqueElements(arr) {
    const uniqueArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isUnique = true;
  
      for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
          isUnique = false;
          break;
        }
      }
  
      if (isUnique) {
        uniqueArr.push(arr[i]);
      }
    }
  
    return uniqueArr;
  }
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = getUniqueElements(inputArray);
console.log(uniqueElements); // Output will be [1, 2, 3, 4, 5]
