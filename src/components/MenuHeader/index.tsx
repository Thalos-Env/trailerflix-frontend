import { useEffect, useState } from 'react'
import Avatar from '../Avatar'
import Logo from '../Logo'
import NavBar from '../NavBar'
import NavItem from '../NavItem'
import SearchInput from '../SearchInput'
import * as S from './styles'

const imgSrc = '../../assets/images/user.jpg'

const MenuHeader = () => {
  const [onSearch, setOnSearch] = useState(false)
  const [search, setSearch] = useState('')
  const [scrollBg, setScrollBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollBg(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.Wrapper scrollBg={scrollBg}>
      <S.Section>
        <Logo />
        <NavBar>
          <NavItem icon={'home'}>Home</NavItem>
          <NavItem icon={'star'}>Novos</NavItem>
          <NavItem icon={'userGroup'}>Colaborar</NavItem>
        </NavBar>
      </S.Section>
      <S.Section>
        {onSearch ? (
          <SearchInput value={search} onChange={setSearch} />
        ) : (
          <NavItem icon={'search'} onClick={() => setOnSearch(true)}>
            Pesquisar
          </NavItem>
        )}
        <NavItem icon='add'>Minha Lista</NavItem>
        <Avatar src={imgSrc} alt='Imagem do usuário' />
      </S.Section>
    </S.Wrapper>
  )
}

export default MenuHeader
