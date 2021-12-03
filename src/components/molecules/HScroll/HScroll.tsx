import { ReactElement } from 'react'
import { HiOutlineChevronLeft } from '@react-icons/all-files/hi/HiOutlineChevronLeft'
import { HiOutlineChevronRight } from '@react-icons/all-files/hi/HiOutlineChevronRight'
import { useScroll } from 'src/hooks'

export interface IHScrollProps {
  children: ReactElement[]
}

const HScroll = ({ children }: IHScrollProps) => {
  const [scrollPos, scrollEl, scrollListesener, scroll] = useScroll()

  return (
    <div className='relative py-3 overflow-x-scroll'>
      {scrollPos[0] > 0 && (
        <button
          type='button'
          className='absolute left-0 z-10 h-full pr-2 bg-gradient-to-r from-white via-white'
          onClick={() => scroll(-60)}
        >
          <HiOutlineChevronLeft className='w-6 h-6 bg-white rounded' />
        </button>
      )}
      {scrollPos[1] > 0 && (
        <button
          type='button'
          className='absolute right-0 z-10 h-full pl-2 bg-gradient-to-l from-white via-white'
          onClick={() => scroll(60)}
        >
          <HiOutlineChevronRight className='w-6 h-6 bg-white rounded' />
        </button>
      )}
      <div
        ref={scrollEl}
        onScroll={scrollListesener}
        className='flex py-3 space-x-2 overflow-x-scroll scrollbar-hide'
      >
        {children.map((child) => (
          <div key={child.key} className='flex-shrink-0'>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HScroll
