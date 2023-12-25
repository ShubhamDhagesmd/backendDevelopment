// This function is use to findcommonelement from two array.
// You can run this code by 'node logicalOperation.js' .


function findCommonElements(arr1, arr2) {
    const commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      const current = arr1[i];
  
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] === current) {
          let isDuplicate = false;
  
          for (let k = 0; k < commonElements.length; k++) {
            if (commonElements[k] === current) {
              isDuplicate = true;
              break;
            }
          }
  
          if (!isDuplicate) {
            commonElements.push(current);
          }
          break;
        }
      }
    }
  
    return commonElements;
  }
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const common = findCommonElements(array1, array2);
console.log(common); // Output will be [3, 4, 5]
  