import { userPurchase } from "../src/data/userPurchase"
import { UserEx0102 } from "../src/interfaces/User"

describe("Modelo de testes", () => {

  test("Pensamento positivo", () => {

    expect("Vou ser contratado pela Accenture").toEqual("Vou ser contratado pela Accenture")
  })

  test("Exercícios 01 e 02", () => {

    const userEx0102: UserEx0102 = {
      name: "Felipe",
      balance: 1000
    }

    expect(userPurchase(userEx0102, 100)).toEqual({ ...userEx0102, balance: 900 })

    expect(userPurchase(userEx0102, 1000)).toEqual({ ...userEx0102, balance: 0 })

    expect(userPurchase(userEx0102, 2000)).toBeUndefined()

  })

  test("Exercício 03", () => {

  })

})