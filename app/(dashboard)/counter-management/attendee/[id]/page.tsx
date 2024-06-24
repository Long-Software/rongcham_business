import Input from '@/components/Input/Input'
import React from 'react'

interface Params {
  params: { id: number }
}

const EditAttendeePage = ({ params }: Params) => {
  return (
    <div className='flex flex-col w-full px-20'>
      <p className='text-3xl font-semibold py-5 w-full'>Update Attendee</p>
      <form>
        <Input type='text' label='Attendee Name' value='Long' />
        <Input type='text' label='PIN' className='mt-5' value='123' />
        <button type='submit' className='btn btn-secondary text-white px-8 mt-5'>
          Update Attendee
        </button>
        <button className='btn btn-error text-white px-8 mt-5'>
          Delete Attendee
        </button>
      </form>
    </div>
  )
}

export default EditAttendeePage
