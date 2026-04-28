class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let curr = 0;
        let res = 0;
        let left = 0;
        let right = heights.length-1;
        while(left<right){
            let smallerBar = Math.min(heights[left], heights[right]);
            curr = smallerBar*(right-left);
            res = Math.max(curr, res);
            if(heights[left]==heights[right]){
                left++;
                right--;
            }
            else if(heights[left]>heights[right]){
                right--; 
            }else if(heights[left]<heights[right]){
                left++;
            }
        }
        return res;
    }
}
