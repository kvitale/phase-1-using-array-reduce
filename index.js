const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 31

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

const sumOfBatteries = batteryBatches.reduce((total, batteryBatches) => 
totalBatteries + batteryBatches, total )

console.log(sumOfBatteries)
