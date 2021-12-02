import Image from 'src/components/atoms/Image'
import Bio from 'src/components/atoms/Bio'
import CardFooter from 'src/components/atoms/CardFooter'

export interface IMainCardProps {
  title: string
  desc: string
  src: string
}

const MainCard = ({ title, desc, src }: IMainCardProps) => (
  <div className='md:flex md:flex-row-reverse'>
    <Image
      src={src}
      alt=''
      className='flex-shrink-0 object-cover object-center w-full h-48 md:h-36 md:w-60 '
    />

    <div className='flex-grow mt-2 mr-0 md:mr-3'>
      <Bio src={src} author='Karthick' publisher='Bootcamp' />
      <h2 className='text-lg font-bold line-clamp-2 line-height-1'>{title}</h2>
      <p className='text-sm text-gray-700 line-clamp-2'> {desc}</p>
      <CardFooter
        publishDate='Nov 8'
        readDuration={12}
        badge='Typescript'
        tag='We know you'
        className='mt-2'
      />
    </div>
  </div>
)

export default MainCard
