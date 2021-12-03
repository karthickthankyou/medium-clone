import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Callout from './Callout'

export default {
  title: 'atoms/Callout',
  component: Callout,
} as ComponentMeta<typeof Callout>

const Template: ComponentStory<typeof Callout> = (args) => <Callout />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
