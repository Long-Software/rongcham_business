import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'RongCham',
  description: 'Digital Queuing service'
}

export default function CounterManagementLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
    <Navbar title='Counter Management' />
    {children} 
    </>
  )
}
