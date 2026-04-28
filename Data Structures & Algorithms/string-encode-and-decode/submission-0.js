class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let spl = '₹';
        let res = '';
        for(let i=0;i<strs.length;i++){
            res += strs[i]+spl;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let curr = '';
        for(let i=0; i<str.length; i++){
            if(str[i] !== '₹'){
                curr += str[i];
            }else{
                res.push(curr);
                curr = '';
            }
        }
        return res;
    }
}
