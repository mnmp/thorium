let numArray = [1, 2, 3, 4, 5, 6, 7, 8]
let num = 1 + (numArray.length)
let n = 8
let realSum = (n * n + 1 / 2)
let diffSum = 0
for (i = 0; i < Array.length; i++) {
    diffSum += numArray[i];
    let missingNum = realSum - diffSum;
    console.log('the missing number is:', missingNum)


}