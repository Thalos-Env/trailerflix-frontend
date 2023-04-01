import { Story, Meta } from '@storybook/react'
import { StoryContainer } from '../../../.storybook/StoryContainer'
import Icon, { iconKey, icons, IconProps } from '.'

export default {
  title: 'Icon',
  component: Icon,
} as Meta

// TODO: use spread in args
export const Default: Story<IconProps> = (args) => {
  return (
    <StoryContainer>
      <Icon icon={args.icon} color={args.color} sizeRem={args.sizeRem} />
    </StoryContainer>
  )
}
Default.args = {
  icon: 'add',
  color: 'primary',
  sizeRem: '5rem',
}

// TODO: add flex wrap to icons
export const All: Story = () => {
  return (
    <StoryContainer>
      {Object.keys(icons).map((icon) => (
        <Icon key={icon} icon={icon as iconKey} sizeRem='5rem' />
      ))}
    </StoryContainer>
  )
}
