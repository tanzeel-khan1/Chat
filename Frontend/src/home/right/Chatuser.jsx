import React from 'react'

const Chatuser = () => {
  return (
    <div className=' p-3 flex h-[12vh] bg-gray-900 hover:bg-gray-600 duration-300 cursor-pointer'>
      <div class="avatar avatar-online">
  <div class="w-20 rounded-full">
    <img src="./avater.png" />
  </div>
</div>
<div>
  <h1 className='text-xl'>Babar Khan </h1>
  <span className='text-sm'>Online</span>
</div>
    </div>
  )
}

export default Chatuser
