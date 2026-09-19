import { describe, expect, it } from 'vitest'
import { quote } from '../src/orderService.js'

describe('quote', () => {
  it('할인이 없으면 기본 운임 그대로', () => {
    expect(quote({ id: 'o1', basePrice: 10000 })).toBe(10000)
  })
})
