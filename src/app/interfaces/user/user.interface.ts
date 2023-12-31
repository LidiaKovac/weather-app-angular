export interface User {
  name:     string
  password: string
  email:    string
  favs:     string[]
  id?: string
}

export interface Auth {
  email: string
  password: string
}

export interface lsAuth {
  user: User
  accessToken: string
}
