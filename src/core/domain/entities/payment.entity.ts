export class Payment {
  id?: string
  order_id?: string
  user_id?: string | null
  payment_method?: string
  amount?: number
  payment_date?: Date | null
  status?: string
  qr_code?: string
}
