"use client"

import { Title1 } from "./Title"

export function Testamony({ title = "Testamonies", cmp }) {
  return (
    <div className='mobile:pl-0 overflow-x-auto py-4'>
      <div className='text-center mb-6'>
        <Title1 title={title} />
      </div>
      <div className='flex justify-center flex-wrap gap-6 min-h-[400px]'>
        {cmp.data.map((obj, i) => (
          <div
            key={i}
            className='w-64 flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-4 overflow-hidden hover:scale-105 duration-300'
          >
            <img
              className='w-24 h-24 rounded-full object-cover border-4 border-gray-200'
              src={obj.img}
              alt='Avatar'
            />
            <h3 className='mt-4 text-lg font-semibold text-gray-800'>{obj.name}</h3>
            <h4 className='text-sm text-gray-600'>{obj.role}</h4>
            <h5 className='text-xs text-gray-500'>{obj.text}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
