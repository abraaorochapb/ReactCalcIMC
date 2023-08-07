import React from 'react'

const BotoesForm = () => {
  return (
    <div className='flex justify-around'>
     <button id='calcular' className='bg-green-500 rounded-sm w-28 p-2 text-white text-xl'>Calcular</button>
      <button id='limpar' className='bg-red-500 rounded-sm p-2 w-28 text-white text-xl'>Limpar</button>
    </div>
  )
}

export default BotoesForm