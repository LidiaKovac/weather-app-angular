interface User {
  name:     string
  password: string
  email:    string
  favs:     string[]
}

interface Auth {
  email: string
  password: string
}

interface lsAuth {
  user: Auth
  accessToken: string
}
