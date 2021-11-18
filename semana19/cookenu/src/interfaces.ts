export interface authenticationData {
  id: string
}

export interface user extends authenticationData {
  email: string
  name: string
  password: string
}