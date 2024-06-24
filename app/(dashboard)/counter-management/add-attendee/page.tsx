import Input from '@/components/Input/Input'
import React from 'react'

const AddAttendeePage = () => {
  return (
    <div className='flex flex-col w-full px-20'>
    <p className='text-3xl font-semibold py-5 w-full'>Add Attendee</p>
    <form>
      <Input type='text' label='Attendee Name' />
      <Input type='text' label='PIN' className='mt-5' />
      <button type='submit' className='btn btn-secondary text-white px-8 mt-5'>
        Add Attendee
      </button>
    </form>
  </div>
  )
}

export default AddAttendeePage