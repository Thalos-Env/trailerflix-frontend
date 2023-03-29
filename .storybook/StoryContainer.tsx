import * as S from './styles'

interface IStoryContainerProps {
  padding?: number
  stretch?: boolean
  gutter?: number
  vertical?: boolean
  children: React.ReactNode
  // TODO: change type for style
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any
}

export const StoryContainer = ({
  padding = 5,
  gutter = 15,
  vertical,
  children,
  style,
}: IStoryContainerProps) => (
  <S.Container
    className='storyContainer'
    style={{
      padding,
      gap: gutter,
      flexDirection: vertical ? 'column' : 'row',
      ...style,
    }}
  >
    {children}
  </S.Container>
)
