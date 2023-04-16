import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black};
  /* text-align: center; */
`

export const BoxCadastro = styled.div`
  width: 400px;
  /* text-align: center; */
  background-color: white;
  border: 2px solid;
  border-radius: 10px;
  background-color: ${theme.colors.lightGray};
`

export const BoxCenter = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
`

export const BoxCenter2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
`

export const BoxInput = styled.div`
  width: 80%;
  margin-left: 10%;
  /* text-align: center; */
  margin-bottom: 5px;
`

export const Loading = styled.div`
  position: absolute;
  z-index: 10;
`

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: ${theme.colors.hoverPrimary};
  :hover {
    opacity: 85%;
  }
  cursor: pointer;
  color: white;
`

export const TextResponse = styled.div`
  font-size: 16px;
  color: red;
`
