import Link from 'src/components/atoms/Link'

export interface ILogoProps {}

const Logo = () => (
  <Link href='/' className='flex items-center space-x-0.5'>
    <>
      <div className='w-6 h-6 bg-black rounded-full' />
      <div className='w-3 h-6 bg-black rounded-full' />
      <div className='w-1 h-6 bg-black rounded-3xl ' />
      <h1 className='hidden ml-1 font-serif text-3xl font-semibold tracking-tighter sm:block'>
        Normal
      </h1>
    </>
  </Link>
)

export default Logo
