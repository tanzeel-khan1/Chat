// import React from 'react'

// const Users = () => {
//   return (
//     <div  className='flex space-x-5 px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer'>
//       <div className="avatar">
//   <div className="w-24 rounded-full">
//     <img src="./avaty-men.png" className='w-14 rounded-full' />
//   </div>
// </div> 
// <div>
//   <h1>babar khan</h1>
//   <span>babar@gmail.com</span>
// </div>
//     </div>
//   )
// }

// export default Users
import React from 'react';

const Users = () => {
  return (
    <div className='flex items-center space-x-4 px-6 py-4 hover:bg-slate-600 duration-300 cursor-pointer'>
      <div className="w-16 h-16 flex-shrink-0">
        <img 
          src="./avaty-men.png" 
          alt="User Avatar" 
          className='w-full h-full rounded-full object-cover' 
        />
      </div>
      <div>
        <h1 className='text-lg font-semibold text-white'>Babar Khan</h1>
        <span className='text-sm text-gray-300'>babar@gmail.com</span>
      </div>
    </div>
  );
}

export default Users;
