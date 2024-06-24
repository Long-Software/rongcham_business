import TableCard from '@/components/Card/TableCard'
import Link from 'next/link'
import React from 'react'

const AttendeePage = () => {
  const categories: CategoryInfo[] = [
    {
      id: 1,
      acronym: 'AO',
      name: 'Account Opening',
      status: true,
      counter: ['1']
    },
    {
      id: 2,
      acronym: 'AC',
      name: 'Account Closure',
      status: true,
      counter: ['2']
    },
    {
      id: 3,
      acronym: 'GI',
      name: 'General Inquiry',
      status: true,
      counter: ['1', '2']
    },
    {
      id: 4,
      acronym: 'CD',
      name: 'Cash Deposit',
      status: false,
      counter: []
    }
  ]
  return (
    <TableCard title='List Category'>
      <table className='table bg-white text-black'>
        <thead>
          <tr className='bg-warning'>
            <th>ID</th>
            <th>Name</th>
            <th>Acronym</th>
            <th>Counter</th>
            <th>Counter</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.acronym}</td>
              <td>
                {category.counter.length !== 0 ? category.counter.join(', ') : 'N/A'}
              </td>
              <td className={`${category.status ? 'text-green-400' : 'text-error'}`}>
                {category.status ? 'Active' : 'Inactive'}
              </td>
              <td>
                <Link className='text-secondary underline' href='/'>
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
