import { describe, expect, it } from 'vitest'
import { issue } from '../src/invoice.js'

describe('issue', () => {
  it('할인이 없으면 기본 운임에 부가세 10% 가산', () => {
    expect(issue({ id: 'i1', basePrice: 10000 })).toBe(11000)
  })
})
