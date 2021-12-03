import React from 'react'
import Link from 'src/components/atoms/Link'

export interface IFooterProps {}

const Footer = () => (
  <div className='flex flex-wrap gap-3 mt-12 text-xs text-gray-500 uppercase '>
    {[
      'Help',
      'Status',
      'Writers',
      'Blog',
      'Careers',
      'Privacy',
      'Terms',
      'About',
    ].map((item) => (
      <Link key={item} href={`/${item}`}>
        {item}
      </Link>
    ))}
  </div>
)

export default Footer
