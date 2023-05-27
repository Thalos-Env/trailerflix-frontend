import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import { useFormik, Form, FormikProvider, Field } from 'formik'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import {
  BoxCadastro,
  BoxCenter,
  BoxCenter2,
  BoxInput,
  Button,
  Container,
  Loading,
  TextResponse,
} from '../signUp/styles'
import { UserContext } from '../../context/UserContext'
import { ToastContainer } from 'react-toastify'

interface Values {
  email: string
  password: string
  stayLogged: boolean
}

const SignIn = () => {
  const { signIn, response } = useContext(UserContext)
  // const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)

  // const navigate = useNavigate()

  const login = (values: Values) => {
    setLoading(true)
    signIn(values)
    setLoading(false)
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string().required('O email é obrigatório.'),
    password: Yup.string().required('A senha é obrigatória.'),
    // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      stayLogged: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values: Values, actions: { setSubmitting: (arg0: boolean) => void }) => {
      setTimeout(() => {
        login(values)
        actions.setSubmitting(false)
      }, 1000)
    },
  })

  const { errors, touched, handleSubmit, getFieldProps } = formik

  return (
    // <div className='h-[100vh] w-[100vw] text-center flex items-center justify-center bg-blue-200'>
    <Container>
      <ToastContainer />
      {loading && (
        <Loading>
          <ClipLoader color={'#bdbecd'} size={60} />
        </Loading>
      )}
      <BoxCadastro>
        <BoxCenter>
          <h1>Login</h1>
          {response && <TextResponse>{response}</TextResponse>}
        </BoxCenter>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
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
            <BoxInput style={{ display: 'flex', marginBlock: '10px' }}>
              <Field
                type='checkbox'
                style={{ marginLeft: '10px' }}
                name='stayLogged'
                // {...getFieldProps('stayLogged')}
              />
              <div style={{ marginLeft: '5px', fontSize: '14px' }}>Manter-me conectado</div>
            </BoxInput>
            <BoxInput style={{ marginTop: '0px', marginBottom: '20px' }}>
              <Button type='submit'>
                <h3>ENTRAR</h3>
              </Button>
            </BoxInput>
          </Form>
        </FormikProvider>
      </BoxCadastro>
      <BoxCadastro style={{ marginTop: '20px' }}>
        <BoxCenter2 style={{ paddingBlock: '15px' }}>
          Não possui uma conta? &nbsp;
          <Link to='/cadastro' style={{ color: 'blue' }}>
            Criar conta
          </Link>
        </BoxCenter2>
      </BoxCadastro>
    </Container>
  )
}

export default SignIn
