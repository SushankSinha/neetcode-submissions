class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let res = new Array(nums.length).fill(0);
        let zeroCount = 0;
        for(let i=0; i<nums.length; i++){
            if(nums[i] == 0){
                zeroCount++;
            }else {
                prod *= nums [i]
            }
        }

        for(let i=0; i<nums.length; i++){
            if(zeroCount > 1){
                return res;
            }else if(zeroCount == 1){
                if(nums[i] == 0){
                    res[i] = prod;
                }else{
                    res[i] = 0;
                }
            }else {
                res[i] = prod/nums[i];
            }
        }
        return res;
    }
}
