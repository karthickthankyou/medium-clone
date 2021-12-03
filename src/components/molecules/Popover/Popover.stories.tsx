import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Popover from './Popover'

export default {
  title: 'src/components/molecules/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = () => <Popover />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
