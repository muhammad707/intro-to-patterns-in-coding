const longgestSubstring = require('../../src/sliding-window/longgest-substring')

xdescribe('Sliding window', function() {
  it('Longest substring with K distinct characters', () => {
    expect(longgestSubstring(2, "araaci")).toEqual(4)
    expect(longgestSubstring(1, "araaci")).toEqual(2)
    expect(longgestSubstring(3, "cbbebi")).toEqual(5)
  })
})