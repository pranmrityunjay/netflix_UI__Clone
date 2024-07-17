import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[35%] md:pt-[20%] px-6 md:px-6 absolute text-white bg-gradient-to-r from-black'>
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
        <div className="my-4 md:m-0">
        <button className='bg-white px-6 md:px-10 py-2 rounded-sm text-black mx-2 hover:bg-opacity-80'>Play</button>
        <button className='bg-gray-500 hidden md:inline-block px-6 py-2 rounded-sm text-white hover:bg-opacity-80'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle