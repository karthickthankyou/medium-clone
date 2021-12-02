import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Callout1 from './Callout1'

export default {
  title: 'atoms/Callout1',
  component: Callout1,
} as ComponentMeta<typeof Callout1>

const Template: ComponentStory<typeof Callout1> = (args) => <Callout1 />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
