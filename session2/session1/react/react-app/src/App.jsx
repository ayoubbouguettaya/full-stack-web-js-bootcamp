import { useState } from 'react'
import './App.css'
import Main from './components/main'

import Navbar from './components/navbar'

function App() {

  const [commands, setCommands] = useState([])


  const handleAddCart = (name) => {
    const commandFound = commands.find(item => item.name === name)

    if (commandFound) {
      commandFound.quantity++;

      setCommands([...commands])

    } else {
      commands.push({ name, quantity: 1 })

      setCommands([...commands])
    }
  }

  return (
    <div >
      <Navbar commands={commands} />
      <Main addCart={handleAddCart} />
    </div>
  )
}

export default App
