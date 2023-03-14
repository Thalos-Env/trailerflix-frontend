import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from './Button'

export default {
  title: 'Button 2',
  component: Button,
} as Meta

export const Basic: Story = (args) => <Button {...args} />
Basic.args = {
  label: 'Button 2',
}
