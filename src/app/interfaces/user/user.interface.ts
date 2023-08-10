export interface User {
  name:     string
  password: string
  email:    string
  favs:     string[]
  _id?: string
}

export interface Auth {
  email: string
  password: string
}

export interface lsAuth {
  user: User
  accessToken: string
}
