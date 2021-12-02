import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Img from 'src/assets/image.jpg'
import MainCard from './MainCard'

export default {
  title: 'molecules/MainCard',
  component: MainCard,
} as ComponentMeta<typeof MainCard>

const Template: ComponentStory<typeof MainCard> = ({ title, desc, src }) => (
  <MainCard title={title} desc={desc} src={src} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Compromising code quality for faster release? Bad idea',
  desc: 'Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.',
  src: Img.toString(),
}
Primary.parameters = {}
