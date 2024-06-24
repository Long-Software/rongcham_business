import TableCard from '@/components/Card/TableCard'
import Link from 'next/link'
import React from 'react'

const AttendeePage = () => {
  const attendees: Attendee[] = [
    {
      id: 1,
      name: 'Sammakara Mak',
      pin: '8734',
      business_token: '',
      created_at: '',
      updated_at: ''
    },
    {
      id: 2,
      name: 'Long Seng',
      pin: '7634',
      business_token: '',
      created_at: '',
      updated_at: ''
    },
    {
      id: 3,
      name: 'Chanpichmony En Soth',
      pin: '5434',
      business_token: '',
      created_at: '',
      updated_at: ''
    },
    {
      id: 4,
      name: 'Chumvisotdaroth Som',
      pin: '3234',
      business_token: '',
      created_at: '',
      updated_at: ''
    }
  ]
  return (
    <TableCard title='List Attendee'>
      <>
        <table className='table bg-white text-black'>
          <thead>
            <tr className='bg-warning'>
              <th>ID</th>
              <th>Name</th>
              <th>Pin Code</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map(attendee => (
              <tr key={attendee.id}>
                <td>{attendee.id}</td>
                <td>{attendee.name}</td>
                <td>{attendee.pin}</td>
                <td>
                  <Link
                    className='text-secondary underline'
                    href={`/counter-management/attendee/${attendee.id}`}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex w-full justify-end'>
          <Link
            href='/counter-management/add-attendee'
            className='btn my-3 mr-5 bg-black rounded-3xl'>
            Add Attendee
          </Link>
        </div>
      </>
    </TableCard>
  )
}

export default AttendeePage
