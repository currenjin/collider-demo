import type { Order } from './order.js'
import { quote } from './orderService.js'

const VAT_RATE = 0.1

/** 최종 청구서 금액. 세금 정책은 SPEC.md 참고. */
export function issue(order: Order): number {
  const amount = quote(order)

  // 부가세: 할인이 끝난 금액에 가산
  return Math.round(amount * (1 + VAT_RATE))
}
