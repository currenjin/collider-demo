import { describe, expect, it } from 'vitest'
import { calculate } from '../src/priceCalculator.js'

describe('calculate', () => {
  it('할인이 없으면 기본 운임 그대로', () => {
    expect(calculate({ id: 'o1', basePrice: 10000 })).toBe(10000)
  })
})
