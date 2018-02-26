import { booleanToWord } from '../src'

describe('booleanToWord', () => {
  it('returns Yes when given true boolean', () => {
    expect(booleanToWord(true)).toEqual('Yes');
  })

  it('returns No when given false boolean', () => {
    expect(booleanToWord(false)).toEqual('No');
  })
})
