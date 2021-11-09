export interface UserEx0102 {
  name: string
  balance: number
}

enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL"
}

enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN"
}

export interface UserEx03 {
  name: string
  age: number
  nacionality: NACIONALITY
}

export interface CasinoEx03 {
  name: string,
  location: LOCATION
}