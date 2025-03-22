import './App.css'
import AddProductForm from './components/add-product-form'
import { useNavigate,Link } from 'react-router-dom'

function App() {

  const navigate = useNavigate()

  const goToAllProduct = () => { 
    navigate('/all')
  }

  return (
    <div>
      <button onClick={goToAllProduct}>Go To all Product page</button>
      
      <Link to={'/all'}> Link to all Product</Link>
      
      <h2>Add Product</h2>
      <AddProductForm />
    </div>
  )
}

export default App
