import TableCard from '@/components/Card/TableCard'
import Link from 'next/link'
import React from 'react'

const AttendeePage = () => {
  const counters: CounterInfo[] = [
    {
      counter_number: '1',
      access_code: 'XYZZT',
      main_category_name: 'AO',
      secondary_category_name: 'AC',
      attendee_name: 'Sammakara Mak'
    },
    {
      counter_number: '1',
      access_code: 'ASDFG',
      main_category_name: 'AC',
      secondary_category_name: 'AO',
      attendee_name: 'Long Seng'
    },
    {
      counter_number: '1',
      access_code: 'JJDDS',
      main_category_name: 'GI',
      secondary_category_name: 'CD',
      attendee_name: 'Chanpichmony En Soth'
    },
    {
      counter_number: '1',
      access_code: 'LKJHG',
      main_category_name: 'CD',
      secondary_category_name: 'GI',
      attendee_name: 'Chumvisotdaroth Som'
    }
  ]
  return (
    <TableCard title='List Counter'>
      <table className='table bg-white text-black'>
        <thead>
          <tr className='bg-warning'>
            <th>Counter</th>
            <th>Main Category</th>
            <th>Secondary Category</th>
            <th>Access Code</th>
            <th>Attendee</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {counters.map(counter => (
            <tr key={counter.counter_number}>
              <td>{counter.counter_number}</td>
              <td>{counter.main_category_name}</td>
              <td>{counter.secondary_category_name}</td>
              <td>{counter.access_code}</td>
              <td>{counter.attendee_name}</td>
              <td>
                <Link className='text-secondary underline' href={`/counter-management/counter/${counter.counter_number}`}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableCard>
  )
}

export default AttendeePage
