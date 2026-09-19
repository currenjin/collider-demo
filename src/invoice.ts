import type { Order } from './order.js'
import { quote } from './orderService.js'

/** 최종 청구서 금액. 세금 정책은 SPEC.md 참고. */
export function issue(order: Order): number {
  return quote(order)
}
