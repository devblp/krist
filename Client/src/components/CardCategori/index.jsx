
import React from 'react'

export default function CardCategori({image,name}) {

  return (
    <>
    <div className=' relative'>
        <img src={image} alt="categoriy" className='w-[200px]'/>
        <button type="button" className="bg-black text-white px-5 py-1.5 rounded-lg text-sm absolute bottom-0 left-6">
            {name}
        </button>
    </div>
    </>
  )
}
