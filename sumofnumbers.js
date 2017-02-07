/**
 * E26
 * Created by kurtnikaitani on 2/6/17.
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums)total += num;
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let x = 0;
  while (x < nums.length) {
    total += nums[x];
    x++;
  }
  return total;
}

function sumRecursion(nums) {
  if (nums.length === 0){
    return 0;
 }
  return nums.shift() + sumRecursion(nums);
}

function sumTheSimpleWay(nums) {
  let total = _.reduce(nums, function test(memo, num) { return memo + num; }, 0);
  return total;
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));
console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
