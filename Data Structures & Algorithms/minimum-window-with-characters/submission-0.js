class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t) return "";
        if (s.length < t.length) return "";
        if (s === t) return s;

        // Build frequency map of t
        const need = new Map();
        for (let ch of t) {
            need.set(ch, (need.get(ch) || 0) + 1);
        }

        let required = need.size;

        let i = 0, j = 0;
        while (j < s.length && !need.has(s[j])) {
            j++;
        }
        i = j;

        if (j === s.length) return "";

        let formed = 0;
        const windowCount = new Map();

        let minLen = Infinity;
        let res = [0, 0];

        while (j < s.length) {
            let ch = s[j];
            windowCount.set(ch, (windowCount.get(ch) || 0) + 1);

            if (need.has(ch) && windowCount.get(ch) === need.get(ch)) {
                formed++;
            }

            // Shrink window
            while (i <= j && formed === required) {
                if ((j - i + 1) < minLen) {
                    minLen = j - i + 1;
                    res = [i, j];
                }

                let leftChar = s[i];
                windowCount.set(leftChar, windowCount.get(leftChar) - 1);

                if (need.has(leftChar) && windowCount.get(leftChar) < need.get(leftChar)) {
                    formed--;
                }

                i++;
            }

            j++;
        }

        return minLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}