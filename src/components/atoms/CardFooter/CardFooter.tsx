import React, { HTMLAttributes } from 'react'
import { HiOutlineBookmark } from '@react-icons/all-files/hi/HiOutlineBookmark'

import Popover from 'src/components/molecules/Popover'
import Badge from '../Badge'

export interface ICardFooterProps {
  publishDate: string
  readDuration: number
  badge?: string
  tag?: string
  className?: HTMLAttributes<HTMLDivElement>['className']
}

const CardFooter = ({
  publishDate,
  readDuration,
  badge,
  tag,
  className,
}: ICardFooterProps) => (
  <div
    className={`flex items-center text-xs text-gray-600 ${className} flex-wrap`}
  >
    <div>{publishDate}</div>
    <span className='px-1'>&bull;</span>
    <div>{readDuration} min read</div>

    {badge ? (
      <>
        <span className='px-1'>&bull;</span>{' '}
        <Badge displayText={badge} size='sm' />
      </>
    ) : null}
    {tag ? (
      <>
        <span className='px-1'>&bull;</span>
        <div>{tag}</div>
      </>
    ) : null}

    <div className='ml-auto'>
      <button type='button'>
        <HiOutlineBookmark className='w-5 h-5' />
      </button>
      <button type='button'>
        {/* <HiOutlineBookmark className='w-5 h-5' /> */}
        <Popover />
      </button>
    </div>
  </div>
)

export default CardFooter
