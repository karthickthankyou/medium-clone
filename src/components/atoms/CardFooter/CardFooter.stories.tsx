import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardFooter from './CardFooter'

export default {
  title: 'atoms/CardFooter',
  component: CardFooter,
} as ComponentMeta<typeof CardFooter>

const Template: ComponentStory<typeof CardFooter> = ({
  publishDate,
  readDuration,
  badge,
  tag,
}) => (
  <CardFooter
    publishDate={publishDate}
    readDuration={readDuration}
    badge={badge}
    tag={tag}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  publishDate: 'Nov 8',
  readDuration: 34,
  badge: 'Typescript',
  tag: 'Selected for you',
}
Primary.parameters = {}
