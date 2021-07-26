function noRepeatSubstring(str) {
  let max = 0;
  let freq = {};
  start = 0;

  for(let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch in freq) {
      start = Math.max(start, freq[ch] + 1)
    }
    freq[ch] = i;
    max = Math.max(max, i - start+1)
  }

  return max
}

module.exports = noRepeatSubstring;