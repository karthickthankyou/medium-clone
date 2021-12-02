import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from 'src/assets/image.jpg'
import AuthorCard from './AuthorCard'

export default {
  title: 'molecules/AuthorCard',
  component: AuthorCard,
} as ComponentMeta<typeof AuthorCard>

const Template: ComponentStory<typeof AuthorCard> = ({
  displayName,
  about,
  src,
}) => <AuthorCard displayName={displayName} about={about} src={src} />

export const Primary = Template.bind({})
Primary.args = {
  displayName: 'Karthick Ragavendran',
  about:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quisquam obcaecati provident eligendi, non aperiam, eveniet quaerat repellendus excepturi omnis est error placeat repudiandae illo consequuntur, blanditiis quae doloribus inventore quidem? Officiis, amet saepe sed placeat vel quidem nihil numquam ratione qui iusto, magni adipisci doloribus debitis eaque blanditiis voluptate delectus? Cum explicabo amet consequatur quo, eaque at molestiae repudiandae repellat rerum dignissimos, suscipit minus commodi cupiditate dolorem doloribus necessitatibus rem incidunt exercitationem quod pariatur? Ad harum magnam obcaecati mollitia!',
  src: image.toString(),
}
Primary.parameters = {}
