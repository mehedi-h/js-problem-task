/*
called a function findingBadData(). it will input a number array. number can be positive
or negative. (less than 0 or grater than or equal to 0).
if the number show negative data then it will be Bad Data.
if the number show positive data then it will be Good Data.

task: finding the bad data from array and return the number.


const numbers = [2,-5, -13, 0, -45, 16, -9, -65,];

function findingBadData(number) {
    let badData = 0;
    for (let data of number) {
        if (data < 0) {
            badData++;
        }
    }
    return badData;
}

const totalBadData = findingBadData(numbers);
console.log(totalBadData);
*/

const data = [-5, 21, 77, 14, -37, 51];
function findingGoodData(number) {
    let goodData = 0;
    for (const items of number) {
        if (items>0) {
            goodData++;
        }
    }
    return goodData;
}
const totalGoodData = findingGoodData(data);
console.log(totalGoodData);

