import { useState } from 'react'
import Icon from '../Icon'
import * as S from './styles'

export type SearchInputProps = {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => {
  const [search, setSearch] = useState(value)

  // TODO: verify if this is the best way to handle the input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onChange(e.target.value)
  }

  const clearSearch = () => {
    setSearch('')
    onChange('')
  }

  return (
    <S.Wrapper>
      <Icon icon='search' sizeRem='2.4rem' color='hoverOutline' />
      <S.Input type='text' placeholder={placeholder} value={search} onChange={handleChange} />
      <Icon
        icon='closeOutline'
        sizeRem='2.4rem'
        color={search ? 'white' : 'hoverOutline'}
        onClick={search ? clearSearch : undefined}
      />
    </S.Wrapper>
  )
}

export default SearchInput
