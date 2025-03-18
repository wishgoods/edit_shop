export function Prefix({ cmp }) {
  return (
    <div className='mobile:pl-0 overflowx py-1'>
      <div className='flex justify-center flex-nowrap gap-4 '>
        <h3 className='bg-black/65 backdrop-blur-sm px-6 py-2 rounded-e sm:text-xl'>
          {cmp.data[0]}
        </h3>
        <h3 className='bg-black/65 backdrop-blur-sm px-6 py-2 rounded-e sm:text-xl'>
          {cmp.data[1]}
        </h3>
      </div>
      {cmp.data[2].map((obj, i) => {
        return (
          <h3 key={i} className='bg-black/65 backdrop-blur-sm px-6 py-2 rounded-e sm:text-xl'>
            {obj}
          </h3>
        )
      })}
    </div>
  )
}
