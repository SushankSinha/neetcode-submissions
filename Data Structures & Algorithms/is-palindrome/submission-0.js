class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let pureString = '';
        let regex = /^[A-Za-z0-9]+$/
        for(let i=0; i<s.length; i++){
            if(regex.test(s[i])){
                pureString += s[i];
            }
        }
        console.log(pureString);
        for(let i=0;i<pureString.length;i++){
            if((pureString[i]).toLowerCase() !== (pureString[pureString.length-1-i]).toLowerCase()){
                return false;
            }
        }
        return true;
    }
}
