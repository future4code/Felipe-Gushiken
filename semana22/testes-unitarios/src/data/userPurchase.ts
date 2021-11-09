import { UserEx0102 } from "../interfaces/User";

export function userPurchase(user: UserEx0102, value: number): UserEx0102 | undefined {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value
    }
  }
  return undefined
}