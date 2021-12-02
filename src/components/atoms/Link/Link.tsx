import NextLink from 'next/link'
import { ReactElement } from 'react'

export interface ILinkProps {
  href: string
  className?: string
  children?: ReactElement | string
  prefetch?: boolean
}

const Link = ({
  href,
  className,
  prefetch = true,
  children = '*no children passed*',
}: ILinkProps) => (
  <NextLink href={href} passHref prefetch={prefetch}>
    <a className={className}>{children}</a>
  </NextLink>
)

export default Link
