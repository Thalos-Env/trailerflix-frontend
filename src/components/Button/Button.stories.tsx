import { Story, Meta } from '@storybook/react'
import { Play } from '@styled-icons/fa-solid/Play'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      control: {
        type: 'disable',
      },
    },
  },
} as Meta

export const Default: Story = (args) => <Button {...args} />
Default.args = {
  children: 'continuar',
  variant: 'primary',
}

export const withIcon: Story = (args) => <Button {...args} />
withIcon.args = {
  children: 'continuar',
  variant: 'primary',
  icon: <Play />,
}

export const onlyIcon: Story = (args) => <Button {...args} />
onlyIcon.args = {
  variant: 'primary',
  icon: <Play />,
}

export const Compare: Story = () => {
  return (
    <>
      <Button variant='primary'>Button</Button>
      <Button variant='white'>Button</Button>
      <Button variant='outline'>Button</Button>
    </>
  )
}

export const CompareIcons: Story = () => {
  return (
    <>
      <Button variant='primary' icon={<Play />} />
      <Button variant='white' icon={<Play />} />
      <Button variant='outline' icon={<Play />} />
    </>
  )
}
