'use client'

import { catsDats } from './data'
import { Title1 } from './Title'

export function Cats4({ title = 'Our Categories' }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="flex justify-center">
        {catsDats.map((obj) => {
          return (
            <div className="w-60 h-56 overflow-hidden relative border shadow-3 rounded-3xl cursor-pointer">
              <img className="size-full" src={obj.src} alt="Image Description" />

              <div className="absolute top-0 text-white">
                <h3 className="bg-black/35 backdrop-blur-sm px-6 py-2 rounded-ee-3xl sm:text-xl">
                  {obj.title}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Cats2({ title = 'Our Categories' }) {
  return (
    <div className="mobile:pl-0">
      <Title1 title={title} />
      <div className="grid grid-flow-col lg:flex gap-4 overflow-x-auto no-scrollbar">
        {catsDats.map((obj) => {
          return (
            <div className="w-60 h-56 overflow-hidden relative border shadow-3 rounded-3xl cursor-pointer">
              <img
                className="w-full h-[calc(100%-48px)] object-cover"
                src={obj.src}
                alt="Image Description"
              />

              <div className="absolute bottom-0 w-full">
                <h3 className="bg-white px-4 sm:text-xl h-12 grid place-items-center">
                  {obj.title}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Cats1({ title = 'Our Categories' ,cmp}) {
  return (
    <div className="mobile:pl-0 overflowx py-1">
      <Title1 title={title} />
      <div className="flex justify-center flex-nowrap gap-4 ">
        {cmp.data.map((obj,i) => {
          return (
            <div key={i} className="min-w-48 max-w-[350px] flex-1 h-96 relative cursor-pointer shadow-4 rounded-xl overflow-hidden hover:scale-105 duration-1000">
              <img className="size-full" src={obj.img} alt="Image Description" />

              <div className="absolute bottom-8 start-0 text-white">
                <h3 className="bg-black/65 backdrop-blur-sm px-6 py-2 rounded-e sm:text-xl">
                  {obj.name}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
