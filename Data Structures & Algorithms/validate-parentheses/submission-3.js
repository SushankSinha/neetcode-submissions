class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length%2 !==0) return false;
        let arr = [];
        for(let i=0; i<s.length;i++){
            if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
                arr.push(s[i]);
            }
            if(s[i] == ")" || s[i] == "]" || s[i] == "}"){
                if(arr.length == 0) {return false;}
            }
            if(s[i]==")" && arr[arr.length-1] == "(" || s[i]=="}" && arr[arr.length-1] == "{" || s[i]=="]" && arr[arr.length-1] == "["){
                arr.pop(arr.length-1);
            }else if(s[i]==")" && arr[arr.length-1] !== "(" || s[i]=="}" && arr[arr.length-1] !== "{" || s[i]=="]" && arr[arr.length-1] !== "["){
                return false;
            }
        }

        return arr.length == 0 ? true : false;
    }
}
