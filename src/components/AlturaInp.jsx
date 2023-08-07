import React from 'react'

const AlturaInp = () => {
  return (
    <div>
      <div className='flex flex-col m-4 mb-8 space-y-2'>
        <label htmlFor="altura" className='text-white text-2xl'>Altura: </label>
        <input id='altura' type="number" className='p-2 rounded-sm' placeholder='Insira sua altura'/>
      </div>
    </div>
  )
}

export default AlturaInp