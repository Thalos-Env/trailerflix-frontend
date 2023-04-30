import React, { ReactNode, createContext, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface UserProps {
  response: string
  signUp: (input: SignUpProps) => void
  signIn: (input: SignInProps) => void
  signOut: () => void
}

interface ProviderProps {
  children: ReactNode
}

interface SignInProps {
  email: string
  password: string
  stayLogged: boolean
}

interface SignUpProps {
  name: string
  email: string
  password: string
  profile: string
}

export const UserContext = createContext<UserProps>({} as UserProps)

export const UserContextProvider = ({ children }: ProviderProps) => {
  const [response, setResponse] = useState<string>('')

  const signIn = async (input: SignInProps) => {
    try {
      const response = await api.post('/api/users/login', {
        email: input.email,
        password: input.password,
      })

      api.defaults.headers.Userorization = `Bearer ${response.data.token}`

      if (input.stayLogged) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.userResponseDTO))
      } else {
        sessionStorage.setItem('token', response.data.token)
        sessionStorage.setItem('user', JSON.stringify(response.data.userResponseDTO))
      }

      toast.success('Login realizado com sucesso')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setResponse(err.response.data.error)
    }
  }

  const signUp = async (input: SignUpProps) => {
    try {
      await api.post('/api/users/cadastro', input)
      toast.success('Cadastro realizado com sucesso')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setResponse(error.response.data.error)
      // toast.error('Erro no cadastro')
    }
  }

  const signOut = () => {
    console.log('ok')
  }

  return (
    <UserContext.Provider value={{ signUp, signIn, signOut, response }}>
      {children}
    </UserContext.Provider>
  )
}
