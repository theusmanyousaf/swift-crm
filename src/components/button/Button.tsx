import React from 'react'

export default function Button({ name }: { name: string }) {
  return (
    <button className='border-2 border-purple-500 rounded-md px-2 py-[7.5px] text-sm font-semibold text-purple-500'>{name}</button>
  )
}
