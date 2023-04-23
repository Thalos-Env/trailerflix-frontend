import { Story, Meta } from '@storybook/react'
import { Input } from './index'

export default {
  title: 'Input',
  component: Input,
} as Meta

export const Default: Story = () => (
  <Input
    state={''}
    setState={function (): void {
      throw new Error('Function not implemented.')
    }}
    error={false}
    required={false}
  />
)
