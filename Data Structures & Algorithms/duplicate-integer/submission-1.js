class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()
        
        for(let item of nums) {
        
             if (!seen.has(item)) {
                 seen.add(item)
            } else {
                 return true
            }
        
        }
         return false
    }
}
