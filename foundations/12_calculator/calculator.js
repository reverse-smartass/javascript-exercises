const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(nums) {
  res = 1;
  for(let i = 0; i < nums.length; i++){
    res *= nums[i];
  }
  return res;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  if(num === 1 || num === 0) return 1;
	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
