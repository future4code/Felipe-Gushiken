export class Purchase {
  productId: string
  userId: string
  productQuantity: number
  totalPrice: number

  constructor (
    instanceProductId: string,
    instanceUserId: string,
    instanceProductQuantity: number,
    instanceTotalPrice: number
  ) {
    this.productId = instanceProductId
    this.userId = instanceUserId
    this.productQuantity = instanceProductQuantity
    this.totalPrice = instanceTotalPrice
  }
}