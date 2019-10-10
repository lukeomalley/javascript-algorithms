const twoSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    currentSum = nums[l] + nums[r];
    if (currentSum === target) {
      return [l, r];
    } else if (currentSum < target) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return false;
};

const twoSumHash = (arr, target) => {
  const nums = {};
  for (let i = 0; i < arr.length; i++) {
    const potentialMatch = target - arr[i];
    if (potentialMatch in nums) {
      return [nums[potentialMatch], i];
    } else {
      nums[arr[i]] = i;
    }
  }
  return false;
};

console.log(twoSumHash([3, 2, 4], 6));
