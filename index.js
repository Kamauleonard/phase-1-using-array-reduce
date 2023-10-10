const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteryBatch(arr) {
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
return sum;
}

let totalBatteries = batteryBatch(batteryBatches);

console.log(totalBatteries);