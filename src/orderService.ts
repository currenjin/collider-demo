import type { Order } from './order.js'
import { calculate } from './priceCalculator.js'

/** 주문 하나의 최종 청구 금액. */
export function quote(order: Order): number {
  const price = calculate(order)

  // 멤버십: 등급별 비율 적용
  if (order.membershipRate) {
    return Math.round(price * order.membershipRate)
  }

  return price
}
