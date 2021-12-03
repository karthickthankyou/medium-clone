import Image from 'src/components/atoms/Image'

export interface IAuthorCardProps {
  displayName: string
  about: string
  src: string
}

const AuthorCard = ({ src, displayName, about }: IAuthorCardProps) => (
  <div className='flex items-center space-x-3'>
    <Image
      src={src}
      alt=''
      className='flex-shrink-0 w-16 h-16 rounded-full shadow-md'
    />
    <div className='flex-grow'>
      <h2 className='font-semibold line-clamp-2'>{displayName}</h2>
      <p className='max-w-sm text-sm text-gray-700 line-clamp-2'>{about}</p>
    </div>

    <button
      type='button'
      className='px-4 py-2 text-sm border border-black rounded-full hover:bg-gray-50'
    >
      Follow
    </button>
  </div>
)

export default AuthorCard
