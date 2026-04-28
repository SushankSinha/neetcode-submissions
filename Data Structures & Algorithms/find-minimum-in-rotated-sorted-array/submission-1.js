class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length-1;
        let res = nums[low]
        while(low<=high){
            if(nums[low]<=nums[high]){
                return Math.min(res, nums[low]);
            }

            let mid = Math.floor((high+low)/2);

            res = Math.min(res, nums[mid]);

            if(nums[low]<=nums[mid]){
                low = mid+1;
            }else {
                high = mid-1;
            }
        }

        return res;

    }
}
