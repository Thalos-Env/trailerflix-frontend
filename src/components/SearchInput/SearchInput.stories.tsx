import { Story, Meta } from '@storybook/react'
import SearchInput, { SearchInputProps } from '.'

export default {
  title: 'SearchInput',
  component: SearchInput,
} as Meta

export const Default: Story<SearchInputProps> = (args) => <SearchInput {...args} />
Default.args = {
  placeholder: 'Título ou gênero',
  value: '',
}
