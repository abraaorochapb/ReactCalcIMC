import React, { useState } from 'react'
import { data } from './data/data';
import CalcComp from './components/CalcComp';


function App() {
  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')

  return (
    <div className='flex justify-center'>
      <div className='bg-zinc-700 w-fit h-fit mt-40 rounded-sm p-8'>
        <CalcComp/>
      </div>
    </div>
  )
}

export default App
