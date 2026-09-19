export type Order = {
  id: string
  /** 기본 운임 (원) */
  basePrice: number
  /** 쿠폰 정액 할인 (원). 없으면 undefined */
  couponAmount?: number
  /** 멤버십 적용 후 비율. 0.9 = 10% 할인. 없으면 undefined */
  membershipRate?: number
}
