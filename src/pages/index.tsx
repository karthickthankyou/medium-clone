import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'src/components/atoms/Image'
import Link from 'src/components/atoms/Link'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/store'
import { selectCount } from 'src/store/counter'
import { increment, setCounterState } from 'src/store/counter/counterSlice'
import { NextSeo } from 'next-seo'
import Nav from 'src/components/molecules/Nav'
import HScroll from 'src/components/molecules/HScroll'
import Badge from 'src/components/atoms/Badge'
import Avatar from 'src/components/atoms/Avatar'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import '@reach/tabs/styles.css'
import MainCard from 'src/components/molecules/MainCard'
import AuthorCard from 'src/components/molecules/AuthorCard'
import SubMainCard from 'src/components/molecules/SubMainCard'
import Footer from 'src/components/molecules/Footer'

export const getStaticProps: GetStaticProps = async () => ({
  props: { data: ['Karthick', 'Ragavendran'] }, // will be passed to the page component as props
})

/** @ts-ignore */
const CoolTab = (props) => {
  const { isSelected, children } = props

  return (
    <Tab
      className={`text-sm font-semibold pb-2 uppercase ${
        isSelected ? 'text-black' : 'text-gray-500'
      }`}
      // eslint-disable-next-line react/jsx-props-no-spreading
    >
      {children}
    </Tab>
  )
}

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const obj = { title: 'Hello World' }
  const [text, setText] = useState(JSON.stringify(obj))
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  useEffect(() => {
    dispatch(setCounterState(data))
  }, [data, dispatch])

  return (
    <div>
      <NextSeo
        title='Normal - Spread Knowledge'
        description='A short description goes here which says what goes here.'
      />
      <Nav />
      <main className='container mx-auto'>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <div className='flex items-center my-2'>
              <div className='text-xs uppercase whitespace-nowrap'>
                Your Topics
              </div>
              <HScroll>
                {[
                  <Badge
                    size='lg'
                    key='Hello'
                    displayText='Software Development'
                  />,
                  <Badge size='lg' key='Hello 2' displayText='UX Design' />,
                  <Badge size='lg' key='Hello 3' displayText='Art' />,
                  <Badge size='lg' key='Hello 4' displayText='Architecture' />,
                  <Badge size='lg' key='Hello 5' displayText='Hello 5' />,
                  <Badge size='lg' key='Hello 6' displayText='Hello 6' />,
                  <Badge size='lg' key='Hello 7' displayText='Hello 7' />,
                  <Badge size='lg' key='Hello 8' displayText='Hello 8' />,
                  <Badge size='lg' key='Hello 9' displayText='Hello 9' />,
                  <Badge size='lg' key='Hello 10' displayText='Hello 10' />,
                ]}
              </HScroll>
            </div>
            <HScroll>
              {[
                <Link key='hello' href='/'>
                  <Avatar
                    count={70}
                    rounded
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
                <Link key='hello2' href='/'>
                  <Avatar
                    count={9}
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
                <Link key='hello3' href='/'>
                  <Avatar
                    count={6}
                    rounded
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
                <Link key='hello4' href='/'>
                  <Avatar
                    count={2}
                    rounded
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
                <Link key='hello5' href='/'>
                  <Avatar
                    count={0}
                    rounded
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
                <Link key='hello6' href='/'>
                  <Avatar
                    count={0}
                    rounded
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
                <Link key='hello7' href='/'>
                  <Avatar
                    count={0}
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
                <Link key='hello8' href='/'>
                  <Avatar
                    count={0}
                    rounded
                    size='lg'
                    src='https://via.placeholder.com/150'
                  />
                </Link>,
              ]}
            </HScroll>
            <Tabs className='my-3'>
              <TabList className='bg-transparent border-b'>
                <CoolTab>Trending</CoolTab>
                <CoolTab>FOLLOWING</CoolTab>
                <CoolTab>RECOMMENDED FOR YOU</CoolTab>
              </TabList>
              <TabPanels className='mt-2'>
                <TabPanel className='space-y-4'>
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                </TabPanel>
                <TabPanel className='space-y-4'>
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                </TabPanel>
                <TabPanel className='space-y-4'>
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='There is no compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                  <MainCard
                    desc='Too many times we have heard tales of code quality being kept on the back burner for the sake of a Monday morning release and then never ever picked back up, let’s explore why is this a bad idea.'
                    src='https://via.placeholder.com/150'
                    title='Compromising code quality for faster release? Bad idea'
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <div className='relative col-span-1 mt-4'>
            <h2 className='my-4 text-lg'>Recommended topics</h2>
            <div className='flex flex-wrap gap-2'>
              {[
                'Ux Writing',
                'Society',
                'Software Development',
                'Society',
                'Flutter Widget',
                'Software Development',
                'Privacy',
                'Design Patterns',
                'Flutter Widget',
              ].map((topic) => (
                <Badge size='lg' key={topic} displayText={topic} />
              ))}
            </div>
            <h2 className='mt-4 mb-2 text-lg'>Who to follow</h2>
            <div className='flex flex-col gap-2'>
              <AuthorCard
                about='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quisquam obcaecati provident eligendi, non aperiam, eveniet quaerat repellendus excepturi omnis est error placeat repudiandae illo consequuntur, blanditiis quae doloribus inventore quidem? Officiis, amet saepe sed placeat vel quidem nihil numquam ratione qui iusto, magni adipisci doloribus debitis eaque blanditiis voluptate delectus? Cum explicabo amet consequatur quo, eaque at molestiae repudiandae repellat rerum dignissimos, suscipit minus commodi cupiditate dolorem doloribus necessitatibus rem incidunt exercitationem quod pariatur? Ad harum magnam obcaecati mollitia!'
                displayName='Karthick Ragavendran'
                src='https://via.placeholder.com/150'
              />
              <AuthorCard
                about='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quisquam obcaecati provident eligendi, non aperiam, eveniet quaerat repellendus excepturi omnis est error placeat repudiandae illo consequuntur, blanditiis quae doloribus inventore quidem? Officiis, amet saepe sed placeat vel quidem nihil numquam ratione qui iusto, magni adipisci doloribus debitis eaque blanditiis voluptate delectus? Cum explicabo amet consequatur quo, eaque at molestiae repudiandae repellat rerum dignissimos, suscipit minus commodi cupiditate dolorem doloribus necessitatibus rem incidunt exercitationem quod pariatur? Ad harum magnam obcaecati mollitia!'
                displayName='Karthick Ragavendran'
                src='https://via.placeholder.com/150'
              />
              <AuthorCard
                about='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quisquam obcaecati provident eligendi, non aperiam, eveniet quaerat repellendus excepturi omnis est error placeat repudiandae illo consequuntur, blanditiis quae doloribus inventore quidem? Officiis, amet saepe sed placeat vel quidem nihil numquam ratione qui iusto, magni adipisci doloribus debitis eaque blanditiis voluptate delectus? Cum explicabo amet consequatur quo, eaque at molestiae repudiandae repellat rerum dignissimos, suscipit minus commodi cupiditate dolorem doloribus necessitatibus rem incidunt exercitationem quod pariatur? Ad harum magnam obcaecati mollitia!'
                displayName='Karthick Ragavendran'
                src='https://via.placeholder.com/150'
              />
              <AuthorCard
                about='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quisquam obcaecati provident eligendi, non aperiam, eveniet quaerat repellendus excepturi omnis est error placeat repudiandae illo consequuntur, blanditiis quae doloribus inventore quidem? Officiis, amet saepe sed placeat vel quidem nihil numquam ratione qui iusto, magni adipisci doloribus debitis eaque blanditiis voluptate delectus? Cum explicabo amet consequatur quo, eaque at molestiae repudiandae repellat rerum dignissimos, suscipit minus commodi cupiditate dolorem doloribus necessitatibus rem incidunt exercitationem quod pariatur? Ad harum magnam obcaecati mollitia!'
                displayName='Karthick Ragavendran'
                src='https://via.placeholder.com/150'
              />
            </div>
            <h2 className='mt-4 mb-2 text-lg'>Recently Saved</h2>
            <div className='flex flex-col gap-2'>
              <SubMainCard
                src='https://via.placeholder.com/150'
                title='Want To Make More Money as a Developer? Start Selling APIs'
              />
              <SubMainCard
                src='https://via.placeholder.com/150'
                title='Want To Make More Money as a Developer? Start Selling APIs'
              />
              <SubMainCard
                src='https://via.placeholder.com/150'
                title='Want To Make More Money as a Developer? Start Selling APIs'
              />
              <SubMainCard
                src='https://via.placeholder.com/150'
                title='Want To Make More Money as a Developer? Start Selling APIs'
              />
            </div>

            <div className='sticky top-0'>
              <Footer />
            </div>
          </div>
        </div>
        <div className='container mx-auto'>
          {JSON.stringify(count)}
          {text}
        </div>
        {/** @ts-ignore */}
        <button type='button' onClick={() => setText(obj)}>
          Break things
        </button>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <button
          className='px-2 py-1 border rounded-sm'
          type='button'
          onClick={() => dispatch(setCounterState(8))}
        >
          Click{' '}
        </button>
        <button
          className='px-2 py-1 border rounded-sm'
          type='button'
          onClick={() => dispatch(increment())}
        >
          Inc{' '}
        </button>
      </main>

      <footer className='container mx-auto'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
