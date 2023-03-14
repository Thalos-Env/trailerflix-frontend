import { withKnobs, text } from '@storybook/addon-knobs'
import { Button } from './Button'

export default {
  title: 'Button 2',
  component: Button,
  decorators: [withKnobs],
}

export const Basic = () => <Button label={text('Label', 'Button2')} />
