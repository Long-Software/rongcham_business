import React from 'react'

interface SelectProps {
  label: string
  name?: string
  disable?: string
  className?: string
  options: { id: string | number; name: string; select?: boolean }[]
}
const Select = ({ label, options, name, disable, className }: SelectProps) => {
  return (
    <label className={`form-control w-full pt-5 ${className}`}>
      <div className='label'>
        <span className='label-text'>{label}</span>
      </div>
      <select className='select select-bordered text-black my-3' name={name}>
        {disable && (
          <option disabled selected>
            {disable}
          </option>
        )}
        {options.map(opt => (
          <option key={opt.id} value={opt.id} selected={opt.select}>
            {opt.name}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Select
