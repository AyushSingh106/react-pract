import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed z-[2]'>
       <div className='absolute w-full py-6 text-xl text-zinc-300 opacity-70 mt-5 flex justify-center font-bold'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-serif text-9xl tracking-tight text-zinc-100 opacity-70'>Docs..</h1>

    </div>
  )
}

export default Background
