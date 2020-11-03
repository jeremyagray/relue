function largeSum(nums) {
  let sum = BigInt(0);
  for (let i = 0; i < nums.length; i++) {
    sum = sum + BigInt(nums[i]);
  }

  return parseInt(sum.toString().slice(0, 10));
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];