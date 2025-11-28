import React from 'react'

const Messages = () => {
  return (
    <>
    <div className="p-4">
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-xl rounded-br-none max-w-xs">
          Calm down, Anakin.
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-gray-300 text-gray-900 px-4 py-2 rounded-xl rounded-bl-none max-w-xs">
          I am the Senate!
        </div>
      </div>
    </div>
    </>
  )
}

export default Messages
