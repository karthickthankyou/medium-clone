import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Nav from './Nav'

export default {
  title: 'molecules/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>

const Template: ComponentStory<typeof Nav> = (args) => <Nav />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
