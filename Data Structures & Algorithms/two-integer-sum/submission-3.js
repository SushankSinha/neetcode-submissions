class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = new Set(nums);

        function findIndex(num, curr){
            for(let i=0;i<nums.length;i++){
                if(nums[i] == num && curr !== i){
                    return i;
                }
            }
        }

        for(let i=0;i<nums.length;i++){
            let isAvailable = target-nums[i];
            if(set.has(isAvailable)){
               let ind = findIndex(isAvailable, i);
               if(i != ind && ind != null){
               return [i, ind];
               }
            }
        }
    }
}
