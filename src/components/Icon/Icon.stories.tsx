import { Story, Meta } from '@storybook/react'
import { StoryContainer } from '../../../.storybook/StoryContainer'
import Icon, { iconKey, icons } from '.'

export default {
  title: 'Icon',
  component: Icon,
  icon: {
    control: {
      type: 'disable',
    },
  },
} as Meta

export const Default: Story = (args) => {
  return (
    <StoryContainer>
      <Icon icon={args.icon} />
    </StoryContainer>
  )
}
Default.args = {
  icon: 'add',
}

export const All: Story = () => {
  return (
    <StoryContainer>
      {Object.keys(icons).map((icon) => (
        <Icon key={icon} icon={icon as iconKey} />
      ))}
    </StoryContainer>
  )
}
