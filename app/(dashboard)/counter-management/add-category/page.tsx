import Input from '@/components/Input/Input'
import React from 'react'

const AddCategoryPage = () => {
  return (
    <div className='flex flex-col w-full px-20'>
      <p className='text-3xl font-semibold py-5 w-full'>Add Category</p>
      <form>
        <Input type='text' label='Category Name' />
        <Input type='text' label='Acronym' className='mt-5' />
        <button type='submit' className='btn btn-secondary text-white px-8 mt-5'>
          Add Category
        </button>
      </form>
    </div>
  )
}

export default AddCategoryPage
