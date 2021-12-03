import Link from 'src/components/atoms/Link'
import Avatar from '../Avatar'

export interface IBioProps {
  src: string
  author: string
  publisher?: string
}

const Bio = ({ src, author, publisher }: IBioProps) => (
  <div className='flex items-center text-xs'>
    <Link href='/'>
      <Avatar
        size='sm'
        // src='https://api.adorable.io/avatars/285/10@adorable.io.png'
        src={src}
      />
    </Link>
    <Link className='mx-1 font-semibold' href='/'>
      {author}
    </Link>
    {publisher ? (
      <>
        <div className='mr-1'>in</div>{' '}
        <Link href='/' className='font-semibold'>
          {publisher}
        </Link>
      </>
    ) : null}
  </div>
)

export default Bio
