const Main = (props)=> {

    const products = [
        {
            name: "tv"
            ,price: 2323
        },{
            name: "phone",
            price: 32434
        },
        {
            name: "pc",
            price: 3434354
        }
    ]


    return <div className="main">
        {
            products.map(item=> <div>
               <p> {item.name}</p>
               <button
               onClick={()=> props.addCart(item.name)}>
                add Cart
               </button>
            </div>)
        }
    </div>
}

export default Main;