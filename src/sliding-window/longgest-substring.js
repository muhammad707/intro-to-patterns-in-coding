function longgestSubstring(k, str) {
  let map = {}
  let max = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]
    if (!(rightChar in map)) {
      map[rightChar] = 0
    }
    map[rightChar] += 1
    while(Object.keys(map).length > k) {
      let leftChar = str[start]
      map[leftChar] -= 1

      if (map[leftChar] === 0) {
        delete map[leftChar]
      }
      start++;
    }
    max = Math.max(max, i - start+1)
  }
  return max
}
module.exports = longgestSubstring;
