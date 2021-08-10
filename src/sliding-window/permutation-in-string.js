/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. 
For example, “abc” has the following six permutations:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.

*/

function permutationInString(str, pattern) {
  const patternMap = pattern.split("").reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0
    } 
    acc[curr] += 1
    return acc
  }, {})

  let matches = 0
  let start = 0
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]
    if (rightChar in patternMap) {
      patternMap[rightChar] -= 1
      if (patternMap[rightChar] === 0) {
        matches += 1
      }
    }

    if (matches === Object.keys(patternMap).length) {
      return true
    }

    if (i >= pattern.length - 1) {
      let leftChar = str[start]
      start++;
      if (leftChar in patternMap) {
        if (patternMap[leftChar] === 0) {
          matches--;
        }
        patternMap[leftChar]++;
      }
    }
  }

  return starts
}

module.exports = permutationInString;