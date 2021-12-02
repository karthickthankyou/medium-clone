import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from './Text'

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = ({
  size,
  mb,
  muted,
  weight,
  children,
}) => (
  <div>
    {/* The hrs are for showing the margins */}
    <hr className='border-gray-600' />
    <Text size={size} mb={mb} muted={muted} weight={weight}>
      {children}
    </Text>
    <hr className='border-gray-600' />
    <div className='mt-3 text-xs text-gray-600'>
      *The borders are to show the line height
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'text-lg',
  muted: 'inherit',
  mb: 'mb-0',
  weight: 'font-normal',
  children: 'Hello World you there?',
}
Primary.parameters = {}
