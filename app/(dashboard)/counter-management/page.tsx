import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const CounterManagementPage = () => {
  const links: { label: string; href: string }[] = [
    { label: 'add-attendee', href: 'counter-management/add-attendee' },
    { label: 'attendee', href: 'counter-management/attendee' },
    { label: 'add-category', href: 'counter-management/add-category' },
    { label: 'category', href: 'counter-management/category' },
    { label: 'add-counter', href: 'counter-management/add-counter' },
    { label: 'counter', href: 'counter-management/counter' }
  ]
  return (
    <>
      <ul>
        {links.map(link => (
          <li key={link.label}>
            <Link href={link.href} className='btn btn-secondary text-white'>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CounterManagementPage
