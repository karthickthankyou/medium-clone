import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Img from 'src/assets/image.jpg'
import SubMainCard from './SubMainCard'
import { Primary as BioPrimary } from 'src/components/atoms/Bio/Bio.stories'

export default {
  title: 'molecules/SubMainCard',
  component: SubMainCard,
} as ComponentMeta<typeof SubMainCard>

const Template: ComponentStory<typeof SubMainCard> = ({ title, src }) => (
  <SubMainCard src={src} title={title} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Want To Make More Money as a Developer? Start Selling APIs',
  ...BioPrimary.args,
}
Primary.parameters = {}
