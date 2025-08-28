import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

type LinkType = string | UrlObject

export type RegularLinkProps<T extends LinkType> = {
  href: T
  children: React.ReactNode
  className?: string
  onClick?: () => void
} & React.ComponentPropsWithoutRef<'a'>

export const RegularLink: React.FC<RegularLinkProps<LinkType>> = ({
  children,
  href,
  className,
  ...props
}) => {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}

export default RegularLink;
