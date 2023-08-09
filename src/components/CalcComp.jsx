import React from 'react'
import { useState } from 'react'
const CalcComp = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const limpar = (e) => {
    e.preventDefault()

    setPeso('')
    setAltura('')
  }
  return (
    <>
      <p className='text-white text-center text-3xl m-4 mt-2'>Calculadora de IMC</p>
      <form>

        <div className='flex flex-col m-4  space-y-2'>
          <label htmlFor="peso" className='text-white text-2xl'>Peso: </label>
          <input id='peso' type="text" className='p-2 rounded-sm' placeholder='Insira seu Peso'
          onChange={(e) => setPeso(e.target.value)} value={peso}/>
        </div>

        <div className='flex flex-col m-4 mb-8 space-y-2'>
          <label htmlFor="altura" className='text-white text-2xl'>Altura: </label>
          <input id='altura' type="text" className='p-2 rounded-sm' placeholder='Insira sua altura'
          onChange={(e) => setPeso(e.target.value)} value={altura}/>
        </div>

        <div className='flex justify-around'>
          <button id='calc-btn' className='bg-green-500 rounded-sm w-28 p-2 text-white text-xl'>Calcular</button>
            
          <button id='limpar' className='bg-red-500 rounded-sm p-2 w-28 text-white text-xl'
          onClick={limpar}>Limpar</button>
        </div>
      </form>
    </>
  )
}

export default CalcComp