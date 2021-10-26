import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {

  generateHash = (plainText: string): string => {
    const rounds = 12
    const salt = genSaltSync(rounds)
    const cipherText = hashSync(plainText, salt)

    return cipherText
  }

  compareHash = (plainText: string, cipherText: string) => {
    const result = compareSync(plainText, cipherText)

    return result
  }
}