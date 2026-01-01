import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Kanban } from './components/Kanban'
import './App.css'
import { BotonCrearTarea } from './components/BotonCrearTarea'
function App() {
  

  return (
    <div className='page slide-in'>
      <Kanban/>
      <BotonCrearTarea/>
    </div>
  )
}

export default App
