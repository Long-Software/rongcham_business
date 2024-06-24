import LinkCard from '@/components/Card/LinkCard'
import React from 'react'

const CounterManagementPage = () => {
  const links: { label: string; href: string; description: string }[] = [
    // { label: 'add-attendee', href: 'counter-management/add-attendee', description: '' },
    {
      label: 'Attendee',
      href: 'counter-management/attendee',
      description: 'List and add attendees.'
    },
    {
      label: 'Add Category',
      href: 'counter-management/add-category',
      description: 'The mid-market subscription plan allows up to 14 categories.'
    },
    {
      label: 'Category',
      href: 'counter-management/category',
      description: 'Listing all categories in a business.'
    },
    {
      label: 'Add Counter',
      href: 'counter-management/add-counter',
      description: 'The mid-market subscription plan allows up to 14 counters.'
    },
    {
      label: 'Counter',
      href: 'counter-management/counter',
      description: 'Listing all counters in a business.'
    }
  ]
  return (
    <>
      <p className='text-xl'>Overview</p>
      <div className='grid w-3/4 flex-wrap gap-2 grid-cols-2 '>
        {links.map(link => (
          <LinkCard key={link.href} href={link.href} title={link.label}>
            <p className='text-center pt-2'>{link.description}</p>
          </LinkCard>
        ))}
      </div>
    </>
  )
}

export default CounterManagementPage
