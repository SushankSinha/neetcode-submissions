class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arr1 = new Array(26).fill(0)
        let arr2 = new Array(26).fill(0)
        for(let i=0;i<s.length;i++){
            let ind = s[i].charCodeAt(0)-97;
            arr1[ind] += 1;
        }

        for(let j=0;j<t.length;j++){
            let ind = t[j].charCodeAt(0)-97;
            arr2[ind] += 1;
        }

        for(let k=0;k<arr1.length;k++){
            if(arr1[k] !== arr2[k]){
                return false;
            }
        }

        return true;
    }
}
