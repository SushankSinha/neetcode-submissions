class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
            let n = nums.length;
    nums.sort((a,b) => a - b);
    let triplets = [];

    for(let i=0; i<n; i++){
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }

        function pairSum(arr, start, target){
        let pairs = [];
        let left = start;
        let right = n-1;
        while(left<right){
            let sum = arr[left] + arr[right];
            if(sum == target){
                triplets.push([arr[left], arr[right], -target]);
                left++;
                while(left<right && arr[left] === arr[left-1]){
                    left++;
                }
            }else if(sum<target){
                left++;
            }else {
                right--;
            }
        }
    }

        pairSum(nums, i+1, -nums[i]);
    }

    return triplets;

    }
}
