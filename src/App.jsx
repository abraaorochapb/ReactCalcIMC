import React from 'react'
import CompForm from './components/CompForm';
function App() {

  return (
    <div className='flex justify-center'>
      <div className='bg-zinc-700 w-fit h-fit mt-40 rounded-sm p-8'>

        <p className='text-white text-center text-3xl m-4 mt-2'>Calculadora de IMC</p>
        
        <CompForm/>
        
      </div>
    </div>
  )
}

export default App
