import Input from '@/components/Input/Input'
import Select from '@/components/Input/Select'
import React from 'react'

const AddCounterPage = () => {
  const attendees = [
    { id: 1, name: 'Sammakara Mak' },
    { id: 2, name: 'Long Seng' },
    { id: 3, name: 'Chanpichmony En Soth' },
    { id: 4, name: 'Chumvisotdaroth Som' }
  ]

  const categories = [
    { id: 1, name: 'AC' },
    { id: 2, name: 'AD' },
    { id: 3, name: 'GO' },
    { id: 4, name: 'DC' }
  ]
  return (
    <div className='flex flex-col w-full px-20'>
      <p className='text-3xl font-semibold py-5 w-full'>Add Counter</p>
      <form>
        <Input type='text' label='Counter' />
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
        <button type='submit' className='btn btn-secondary text-white px-8 mt-5'>
          Add Counter
        </button>
      </form>
    </div>
  )
}

export default AddCounterPage
