import Input from '@/components/Input/Input'
import Select from '@/components/Input/Select'
import React from 'react'

interface Params {
  params: { id: number }
}
const EditCounterPage = ({ params }: Params) => {
  const attendees = [
    { id: 1, name: 'Sammakara Mak' },
    { id: 2, name: 'Long Seng', select: true },
    { id: 3, name: 'Chanpichmony En Soth' },
    { id: 4, name: 'Chumvisotdaroth Som' }
  ]

  const categories = [
    { id: 1, name: 'AC' },
    { id: 2, name: 'AD', select: true },
    { id: 3, name: 'GO' },
    { id: 4, name: 'DC' }
  ]
  return (
    <div className='flex flex-col w-full px-20'>
      <p className='text-3xl font-semibold py-5 w-full'>Add Counter</p>
      <form>
        <Input type='text' label='Counter' value='1' />
        <Select
          label='Attendee Name'
          options={attendees}
          disable='Choose Attendee'
          name='attendee_id'
        />
        <Select
          label='Assign Main Category'
          options={categories}
          disable='Choose Category'
          name='main_category_id'
        />
        <Select
          label='Assign Secondary Category'
          options={categories}
          disable='Choose Category'
          name='secondary_category_id'
        />
        <button className='w-full btn btn-outline border-error text-error py-3 mt-5 rounded-full'>Generate Access Code</button>
        <button type='submit' className='btn btn-secondary text-white px-5 mr-5 mt-5'>
          Update Counter
        </button>
        <button className='btn btn-error text-white px-5 mt-5'>Delete Counter</button>
      </form>
    </div>
  )
}

export default EditCounterPage
