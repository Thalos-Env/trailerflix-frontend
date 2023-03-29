import { Story, Meta } from '@storybook/react'
import { StoryContainer } from '../../../.storybook/StoryContainer'
import Icon, { iconKey, icons, IconProps } from '.'

export default {
  title: 'Icon',
  component: Icon,
  icon: {
    control: {
      type: 'disable',
    },
  },
} as Meta

export const Default: Story<IconProps> = (args) => {
  return (
    <StoryContainer>
      <Icon {...args} />
    </StoryContainer>
  )
}
Default.args = {
  icon: 'add',
  color: 'primary',
  sizeRem: '5rem',
}

export const All: Story = () => {
  return (
    <StoryContainer>
      {Object.keys(icons).map((icon) => (
        <Icon key={icon} icon={icon as iconKey} sizeRem='5rem' />
      ))}
    </StoryContainer>
  )
}
