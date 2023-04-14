import { Story, Meta } from '@storybook/react'
import TestingApi from '.'

export default {
  title: 'TestingApi',
  component: TestingApi,
} as Meta

export const Default: Story = () => <TestingApi />
