import React, { ReactElement } from 'react'
import Card from './Card'

const TableCard = ({ title, children }: {title: string, children: ReactElement }) => {
  return (
    <div className='flex w-full justify-center'>
      <Card title={title} className='bg-primary text-white w-3/4'>
        {children}
      </Card>
    </div>
  )
}

export default TableCard
