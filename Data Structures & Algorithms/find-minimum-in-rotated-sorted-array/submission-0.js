class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity;
        // let low = nums[0];
        // let high = nums[nums.length-1];
        // let mid = low + (high-low)/2;
        // while(mid<min){

        // }

        for(let i=0; i<nums.length; i++){
            if(nums[i]<min){
                min = nums[i];
            }
        }

        return min

    }
}
