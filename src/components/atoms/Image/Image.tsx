/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes, useState } from 'react'
import NextImage from 'next/image'

export type IImageProps = React.ComponentProps<typeof NextImage> & {
  src: string
  fallbackSrc?: string
  height?: number
  width?: number
  className?: HTMLAttributes<typeof NextImage>['className']
}

const Image = (props: IImageProps) => {
  const {
    src,
    fallbackSrc = 'https://via.placeholder.com/150',
    className,
    alt,
    ...rest
  } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <div className={`${className} overflow-hidden relative`}>
      <NextImage
        {...rest}
        alt={alt}
        src={imgSrc}
        className='object-cover'
        layout='fill'
        onError={() => {
          setImgSrc(fallbackSrc.toString())
        }}
      />
    </div>
  )
}

export default Image
