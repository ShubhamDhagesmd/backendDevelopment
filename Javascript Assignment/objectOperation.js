 
// Car arrays representing cars
const carArray1 = [
    {
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
    },
    {
      brand: 'Nissan',
      model: 'Altima',
      year: 2018,
    },
  ];
  
  const carArray2 = [
    {
      brand: 'Honda',
      model: 'Civic',
      year: 2016,
    },
    {
      brand: 'Ford',
      model: 'Mustang',
      year: 2019,
    },
  ];
  
  // Function to merge two car arrays preserving properties
  function mergeCarArrays(array1, array2) {
    const mergedArray = [...array1];
  
    array2.forEach((carB) => {
      const found = mergedArray.some((carA) => carA.brand === carB.brand);
  
      if (!found) {
        mergedArray.push(carB);
      }
    });
  
    return mergedArray;
  }
  
  // Example usage of the function
  const mergedCars = mergeCarArrays(carArray1, carArray2);
  console.log(mergedCars);
  