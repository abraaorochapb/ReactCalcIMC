import React from 'react'

const PesoInp = () => {
  return (
    <div className='flex flex-col m-4  space-y-2'>
      <label htmlFor="peso" className='text-white text-2xl'>Peso: </label>
      <input id='peso' type="number" className='p-2 rounded-sm' placeholder='Insira seu Peso'/>
    </div>
  )
}

export default PesoInp