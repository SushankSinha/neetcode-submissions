class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0){return 0;}
        let curr = 0;
        let res = 0;
        let set = new Set(nums);
        let sortedSet = [...set].sort((a,b)=>a-b);
        for(let i=0;i<sortedSet.length; i++){
            if(sortedSet[i]+1==sortedSet[i+1]){
                curr++;
            }else{
                res = Math.max(res, curr);
                curr = 0;
            }
        }
        return res+1;
    }
}
