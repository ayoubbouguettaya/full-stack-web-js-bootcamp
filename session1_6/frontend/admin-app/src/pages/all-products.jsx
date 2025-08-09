import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AllProducts = () => {
    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const reponse = await fetch("http://localhost:3000/")

            const data = await reponse.json()

            console.log(data)

            setProducts(data)
        }

        fetchData()


    }, [])



    return (
        <div >
            <h1>All Products</h1>
            <button onClick={() => { navigate("/add-new") }}>
                ADD new Product
            </button>

            <div>
                {products.map((item) => {

                    return <div style={{ border: '1px solid #999', padding: "30px" }}>
                        <h2 style={{ fontWeight: 'bold' }}>{item.name}</h2>
                        <p>price {item.price} | quantity {item.quantity} </p>
                        <div style={{ display: 'flex', maxWidth: '500px', gap: '10px' }}>

                            <button>Edit</button>
                            <button>Delete</button>
                            <a href={`/products/${item.id}`}>
                                <button>Detail</button>
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )

}

export default AllProducts;



