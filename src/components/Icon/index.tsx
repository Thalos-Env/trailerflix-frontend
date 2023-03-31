import * as S from './styles'

import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline'
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { Check } from '@styled-icons/boxicons-regular/Check'
import { CheckCircleFill } from '@styled-icons/bootstrap/CheckCircleFill'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { ExpandLess } from '@styled-icons/material-outlined/ExpandLess'
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'
import { Forward10 } from '@styled-icons/material/Forward10'
import { Fullscreen } from '@styled-icons/boxicons-regular/Fullscreen'
import { HelpCircle } from '@styled-icons/boxicons-solid/HelpCircle'
import { Home } from '@styled-icons/boxicons-solid/Home'
import { Info } from '@styled-icons/entypo/Info'
import { InfoCircleFill } from '@styled-icons/bootstrap/InfoCircleFill'
import { Movie2 } from '@styled-icons/remix-fill/Movie2'
import { Pause } from '@styled-icons/fluentui-system-filled/Pause'
import { Play } from '@styled-icons/fa-solid/Play'
import { Plus } from '@styled-icons/bootstrap/Plus'
import { Plus as Add } from '@styled-icons/boxicons-regular/Plus'
import { Replay10 } from '@styled-icons/material-sharp/Replay10'
import { Search } from '@styled-icons/evaicons-solid/Search'
import { SkipPrevious } from '@styled-icons/boxicons-regular/SkipPrevious'
import { SkipNext } from '@styled-icons/boxicons-regular/SkipNext'
import { Star } from '@styled-icons/boxicons-solid/Star'
import { Subtitles } from '@styled-icons/material-rounded/Subtitles'
import { Tv } from '@styled-icons/evaicons-solid/Tv'
import { UserGroup } from '@styled-icons/heroicons-solid/UserGroup'
import { VideoLibrary } from '@styled-icons/material/VideoLibrary'
import { VolumeFull } from '@styled-icons/boxicons-solid/VolumeFull'

export const icons = {
  add: Add,
  arrowLeft: ArrowIosBackOutline,
  arrowRight: ArrowIosForwardOutline,
  check: Check,
  checkCircle: CheckCircleFill,
  closeOutline: CloseOutline,
  expandLess: ExpandLess,
  expandMore: ExpandMore,
  foward10: Forward10,
  fullscreen: Fullscreen,
  helpCircle: HelpCircle,
  home: Home,
  info: Info,
  infoCircle: InfoCircleFill,
  pause: Pause,
  play: Play,
  plus: Plus,
  replay10: Replay10,
  search: Search,
  skipPrevious: SkipPrevious,
  skipNext: SkipNext,
  slideFilm: Movie2,
  star: Star,
  subtitles: Subtitles,
  tv: Tv,
  userGroup: UserGroup,
  videoLibrary: VideoLibrary,
  volumeFull: VolumeFull,
}

export type iconKey = keyof typeof icons

export type IconProps = {
  icon: iconKey
  sizeRem?: string
  className?: string
  color?: 'primary' | 'secondary' | 'white' | 'black' | 'hoverOutline'
  onClick?: () => void
}

const Icon = ({ icon, sizeRem, color, onClick, ...rest }: IconProps) => {
  const IconComponent = icons[icon]

  return (
    <S.SvgContainer sizeRem={sizeRem} color={color} cursorPointer={!!onClick} onClick={onClick}>
      <IconComponent aria-hidden {...rest} />
    </S.SvgContainer>
  )
}

export default Icon
