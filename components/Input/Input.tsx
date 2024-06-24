import React from 'react'
interface InputProps {
  type: string
  label: string
  value?: string
  placeholder?: string
  className?: string
}
const Input = ({ type, label, placeholder = 'Type here', value , className}: InputProps) => {
  return (
    <label className={`form-control w-full pt-5 ${className}`}>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className='input input-bordered w-full'
        />
    </label>
  )
}

export default Input
