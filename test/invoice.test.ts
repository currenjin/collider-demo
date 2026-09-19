import { describe, expect, it } from 'vitest'
import { issue } from '../src/invoice.js'

describe('issue', () => {
  it('할인도 세금도 없으면 기본 운임 그대로', () => {
    expect(issue({ id: 'i1', basePrice: 10000 })).toBe(10000)
  })
})
