import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import { useFormik, Form, FormikProvider, Field } from 'formik'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import {
  BoxCadastro,
  BoxCenter,
  BoxInput,
  Button,
  Container,
  Loading,
  TextResponse,
} from './styles'
import { UserContext, UserContextProvider } from '../../context/UserContext'
import { ToastContainer } from 'react-toastify'

interface Values {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const SignUp = () => {
  const { signUp, response } = useContext(UserContext)
  // const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  // const navigate = useNavigate()

  const register = async (values: Values) => {
    const { email, password, name } = values
    setLoading(true)
    await signUp({ name, email, password, profile: 'user' })
    setLoading(false)
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'O nome é obrigatório.')
      .max(50, 'Nome muito grande.')
      .required('O nome é obrigatório.'),
    email: Yup.string()
      .email('O E-mail deve ser um endereço de e-mail válido.')
      .required('O email é obrigatório.'),
    password: Yup.string()
      .min(6, 'Senha pequena!')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'Deve conter no mínimo 6 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial.',
      )
      .required('A senha é obrigatória.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'A confirmação de senha não está igual.')
      .required('A confirmação de senha é obrigatória.'),
    // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values: Values, actions: { setSubmitting: (arg0: boolean) => void }) => {
      setTimeout(() => {
        register(values)
        actions.setSubmitting(false)
      }, 1000)
    },
  })

  const { errors, touched, handleSubmit, getFieldProps } = formik

  return (
    // <div className='h-[100vh] w-[100vw] text-center flex items-center justify-center bg-blue-200'>
    <UserContextProvider>
      <ToastContainer />
      <Container>
        {loading && (
          <Loading>
            <ClipLoader color={'#bdbecd'} size={60} />
          </Loading>
        )}
        <BoxCadastro>
          <BoxCenter>
            <h1>Cadastro</h1>
            {response && <TextResponse>{response}</TextResponse>}
          </BoxCenter>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              <BoxInput>
                <label style={{ marginLeft: '10px' }} htmlFor='input-name'>
                  Nome *
                </label>
                <Field
                  id='input-name'
                  style={{
                    border:
                      errors.name && touched.name
                        ? 'red 2px solid'
                        : !errors.name && touched.name && 'green 2px solid',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                  {...getFieldProps('name')}
                />
                {errors.name && touched.name ? (
                  <div style={{ color: 'red', marginLeft: '20px', fontSize: '13px' }}>
                    {errors.name}
                  </div>
                ) : null}
              </BoxInput>
              <BoxInput>
                <label style={{ marginLeft: '10px' }} htmlFor='input-name'>
                  Email *
                </label>
                <Field
                  type='email'
                  style={{
                    border:
                      errors.email && touched.email
                        ? 'red 2px solid'
                        : !errors.email && touched.email && 'green 2px solid',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                  {...getFieldProps('email')}
                />
                {errors.email && touched.email && (
                  <div style={{ color: 'red', marginLeft: '20px', fontSize: '13px' }}>
                    {errors.email}
                  </div>
                )}
              </BoxInput>
              <BoxInput>
                <label style={{ marginLeft: '10px' }} htmlFor='input-name'>
                  Senha *
                </label>
                <Field
                  type='password'
                  style={{
                    width: '100%',
                    border:
                      errors.password && touched.password
                        ? 'red 2px solid'
                        : !errors.password && touched.password && 'green 2px solid',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                  {...getFieldProps('password')}
                />
                {touched.password && errors.password && (
                  <div style={{ color: 'red', fontSize: '13px' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{errors.password}
                  </div>
                )}
              </BoxInput>
              <BoxInput>
                <label style={{ marginLeft: '10px' }} htmlFor='input-name'>
                  Confirmar senha *
                </label>
                <Field
                  type='password'
                  style={{
                    width: '100%',
                    border:
                      errors.confirmPassword && touched.confirmPassword
                        ? 'red 2px solid'
                        : !errors.confirmPassword && touched.confirmPassword && 'green 2px solid',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
                  {...getFieldProps('confirmPassword')}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div style={{ color: 'red', fontSize: '13px' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{errors.confirmPassword}
                  </div>
                )}
              </BoxInput>
              <BoxInput style={{ marginTop: '20px' }}>
                <Button type='submit'>
                  <h4>CADASTRAR</h4>
                </Button>
              </BoxInput>
            </Form>
          </FormikProvider>
          <BoxCenter style={{ marginBottom: '20px', marginTop: '20px' }}>
            Já possui uma conta? &nbsp;
            <Link to='/' style={{ color: 'blue' }}>
              ENTRAR
            </Link>
          </BoxCenter>
        </BoxCadastro>
      </Container>
    </UserContextProvider>
  )
}

export default SignUp
