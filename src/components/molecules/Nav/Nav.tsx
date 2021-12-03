import { HiOutlineBell } from '@react-icons/all-files/hi/HiOutlineBell'
import { HiOutlineBookmark } from '@react-icons/all-files/hi/HiOutlineBookmark'
import { HiOutlineSearch } from '@react-icons/all-files/hi/HiOutlineSearch'
import Logo from 'src/components/atoms/Logo'
import Image from 'src/components/atoms/Image'

export interface INavProps {}

const Nav = () => (
  <nav className='py-4 shadow-md '>
    <div className='container flex items-center mx-auto'>
      <Logo />
      <button type='button' className='ml-auto '>
        <HiOutlineSearch className='w-6 h-6 text-gray-600' />
      </button>
      <button type='button' className='ml-3 '>
        <HiOutlineBookmark className='w-6 h-6 text-gray-600' />
      </button>
      <button type='button' className='ml-3 '>
        <HiOutlineBell className='w-6 h-6 text-gray-600' />
      </button>
      <button
        type='button'
        className='px-3 py-1.5 h-full hidden sm:block ml-3 text-sm border border-gray-600 hover:bg-gray-50 rounded-full'
      >
        Upgrade
      </button>
      <button
        type='button'
        className='w-8 h-8 ml-3 overflow-hidden rounded-full '
      >
        <Image
          src='https://via.placeholder.com/150'
          alt='profile'
          className='object-cover object-center w-full h-full'
        />
      </button>
    </div>
  </nav>
)

export default Nav
