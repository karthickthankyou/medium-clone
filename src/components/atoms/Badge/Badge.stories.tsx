import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = ({ displayText }) => (
  <Badge displayText={displayText} />
)

export const Primary = Template.bind({})
Primary.args = {
  displayText: 'Hello World',
}
Primary.parameters = {}
