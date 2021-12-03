import NextLink from 'next/link'
import { ReactElement } from 'react'

export interface ILinkProps {
  href: string
  className?: string
  children?: ReactElement | string
}

const Link = ({
  href,
  className,
  children = '*no children passed*',
}: ILinkProps) => (
  <NextLink href={href} passHref>
    <a className={className}>{children}</a>
  </NextLink>
)

export default Link
