import type { Order } from './order.js'

/** 기본 운임을 계산한다. 할인 정책은 SPEC.md 참고. */
export function calculate(order: Order): number {
  let price = order.basePrice

  // 쿠폰: 기본 운임에서 정액 차감
  if (order.couponAmount) {
    price -= order.couponAmount
  }

  return price
}
