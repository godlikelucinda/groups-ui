import {formatDateTime} from '@/tools.js'

describe('tools.js', () => {
  it('should return an empty string', () => {
    const date = new Date()
    expect(formatDateTime(date)).toBe('')
  })
})