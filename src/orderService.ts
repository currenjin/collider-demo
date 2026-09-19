import type { Order } from './order.js'
import { calculate } from './priceCalculator.js'

/** 주문 하나의 최종 청구 금액. */
export function quote(order: Order): number {
  return calculate(order)
}
