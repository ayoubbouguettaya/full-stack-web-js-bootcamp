import '../App.css'
import Example from '../components/example-tailwind'
import Formulaire2 from '../components/form2'

import {useNavigate} from 'react-router-dom'

function App() {
 const navigate = useNavigate()

 const handleJump = () => {
  // extra logic

    navigate("/list-products")
 }

  return (
    <>
       <button onClick={handleJump}>
       Go to all Product 1
       </button>

       <a href='/list-products'>Go to all Product 2</a>

      <Formulaire2 />
    </>
  )
}

export default App
