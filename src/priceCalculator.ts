import type { Order } from './order.js'

/** 기본 운임을 계산한다. 할인 정책은 SPEC.md 참고. */
export function calculate(order: Order): number {
  return order.basePrice
}
