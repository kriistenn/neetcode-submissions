class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arr1 = new Map()
        let arr2 = new Map()
        
        if (s.length === t.length) {
            for (const i of s) {
                if (!arr1.has(i)) {
                    arr1.set(i, 1)
                } else {
                    arr1.set(i, Number(arr1.get(i)) + 1)
                }
            }
            for (const i of t) {
                if (!arr2.has(i)) {
                    arr2.set(i, 1)
                } else {
                    arr2.set(i, Number(arr2.get(i)) + 1)
                }

            }
            for (const [key, value] of arr1) {
                if (arr2.get(key) !== value) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}
