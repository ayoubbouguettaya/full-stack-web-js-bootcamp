import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../lib/types'

const ProductsTable = ({data}: {data: Product[]}) => {


  if (!data || data.length === 0){
    return <p>Nothing to show</p>
  }

  
  return (
<table className="w-[100%] mx-auto border border-sky-900 rounded-l">
     <thead>
        <tr >
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
     </thead>
     <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td>
              <img src={`http://localhost:3000/static/products/${item.image}`} width={100} height={100}/> </td>
          
            <td>
              <Link to={`/products/${item.category}`}> Detail</Link>{" "}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
)
}

export default ProductsTable