import React from 'react'

const CompForm = () => {
  return (
    <form>
      <div className='flex flex-col m-4  space-y-2'>
        <label htmlFor="peso" className='text-white text-2xl'>Peso: </label>
        <input id='peso' type="number" className='p-2 rounded-sm' placeholder='Insira seu Peso'/>
      </div>

       <div className='flex flex-col m-4 mb-8 space-y-2'>
        <label htmlFor="altura" className='text-white text-2xl'>Altura: </label>
        <input id='altura' type="number" className='p-2 rounded-sm' placeholder='Insira sua altura'/>
       </div>

      <div className='flex justify-around'>
         <button id='calcular' className='bg-green-500 rounded-sm w-28 p-2 text-white text-xl'>Calcular</button>
         <button id='limpar' className='bg-red-500 rounded-sm p-2 w-28 text-white text-xl'>Limpar</button>
      </div>
   </form>
  )
}

export default CompForm