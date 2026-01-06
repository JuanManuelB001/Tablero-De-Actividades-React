import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Kanban } from './components/Kanban'
import './App.css'
import { BotonCrearTarea } from './components/BotonCrearTarea'
import mockData from './data/mockData'
import { BotonActualizar } from './components/BotonActualizar'
function App() {
  const [data, setData] = useState(mockData)

  return (
    <div className='page slide-in'>
      <Kanban data={data} setData={setData} />
      <BotonCrearTarea/>
      <BotonActualizar data={data} setData={setData} />
    </div>
  )
}

export default App
