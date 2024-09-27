
import React from 'react'

export default function CardCategori({image,name}) {

  return (
    <>
    <div className=' relative w-[250px]'>
        <img src={image} alt="categoriy" className='w-[250px]'/>
        <button type="button" className="bg-black text-white px-5 py-1.5 rounded-lg text-sm absolute -bottom-8 left-16 w-[50%]">
            {name}
        </button>
    </div>
    </>
  )
}
