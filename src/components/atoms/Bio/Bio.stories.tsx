import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from 'src/assets/image.jpg'
import Bio from './Bio'

export default {
  title: 'atoms/Bio',
  component: Bio,
} as ComponentMeta<typeof Bio>

const Template: ComponentStory<typeof Bio> = ({ src, author, publisher }) => (
  <Bio src={src} author={author} publisher={publisher} />
)

export const Primary = Template.bind({})
Primary.args = {
  src: image.toString(),
  author: 'Karthick',
  publisher: 'Bootcamp',
}
Primary.parameters = {}
