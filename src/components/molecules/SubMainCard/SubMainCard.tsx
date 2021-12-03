import Bio from 'src/components/atoms/Bio'
import CardFooter from 'src/components/atoms/CardFooter'

export interface ISubMainCardProps {
  src: string
  title: string
}

const SubMainCard = ({ src, title }: ISubMainCardProps) => (
  <div className='flex-grow mt-2 mr-0 md:mr-3'>
    <Bio src={src} author='Karthick' publisher='Bootcamp' />
    <h2 className='text-lg font-semibold leading-tight line-clamp-2'>
      {title}
    </h2>
    <CardFooter publishDate='Nov 8' readDuration={12} className='mt-2' />
  </div>
)

export default SubMainCard
