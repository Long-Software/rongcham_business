import Input from '@/components/Input/Input'
import React from 'react'
interface Params {
  params: { id: number }
}
const EditCategoryPage = ({ params }: Params) => {
  return (
    <div className='flex flex-col w-full px-20'>
      <p className='text-3xl font-semibold py-5 w-full'>Update Category</p>
      <form>
        <Input type='text' label='Category Name' value='Account Opening' />
        <Input type='text' label='Acronym' className='mt-5' value='AO' />
        <button type='submit' className='btn btn-secondary text-white px-5 mr-5 mt-5'>
          Update Category
        </button>
        <button className='btn btn-error text-white px-5 mt-5'>Delete Category</button>
      </form>
    </div>
  )
}

export default EditCategoryPage
