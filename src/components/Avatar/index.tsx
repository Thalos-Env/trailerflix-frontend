import * as S from './styles'

type AvatarProps = {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: AvatarProps) => <S.Wrapper src={src} alt={alt} />

export default Avatar
