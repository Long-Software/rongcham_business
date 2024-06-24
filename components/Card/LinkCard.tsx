import Link from 'next/link'
import React, { CSSProperties, ReactElement } from 'react'

const LinkCard = ({
  title,
  className,
  href,
  style,
  children
}: {
  title: string
  className?: string
  href: string
  style?: CSSProperties
  children: ReactElement
}) => {
  return (
    <Link href={href}>
      <div
        className={`flex card place-items-center rounded-box w-[450px] h-[100px] bg-primary ${className} text-white`}
        style={style}>
        {title && (
          <>
            <p className='text-xl p-1'>{title}</p>
            <hr className='w-full' />
          </>
        )}
        {children}
      </div>
    </Link>
  )
}

export default LinkCard
