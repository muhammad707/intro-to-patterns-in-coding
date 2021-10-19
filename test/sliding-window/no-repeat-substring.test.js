const noRepeatSubstring = require('../../src/sliding-window/no-repeat-substring')

xdescribe('Sliding window', function() {
  it('no repeat substring aabccbb', () => {
    expect(noRepeatSubstring('aabccbb')).toEqual(3)
    expect(noRepeatSubstring('abbbb')).toEqual(2)
    expect(noRepeatSubstring('abccde')).toEqual(3)
  })
})