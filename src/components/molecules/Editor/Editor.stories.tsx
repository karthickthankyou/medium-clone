import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Editor from './Editor'

export default {
  title: 'molecules/Editor',
  component: Editor,
} as ComponentMeta<typeof Editor>

const Template: ComponentStory<typeof Editor> = (args) => <Editor />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
