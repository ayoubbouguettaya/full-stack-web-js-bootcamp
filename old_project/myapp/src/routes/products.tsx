import { useEffect, useState } from "react";
import axios from "axios";
import ProductsTable from "../components/products/products-table";
import { Product } from "../lib/types";
import { getAccessToken } from "../lib/get-token"
import { Link } from "react-router-dom";
import { Range } from 'react-range';
import TwoThumbs from "@/components/ui/slider";



const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtredProducts,setFiltredProducts] = useState<Product[]>([]);
  
  const [selectedCat,setSelectedCat ] = useState("")
  const [selectedPrices, setselectedPrices] = useState([1000, 50000])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products/all",{
          headers: {Authorization: getAccessToken()}
        });
        setProducts(response.data);
        setFiltredProducts(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProduct();
  }, []);


  useEffect(()=> {
    console.log("selectedCat has changed",selectedCat)
    if(!selectedCat){
       setFiltredProducts([...products])
      return;
      }

    const filtredProduct = products.filter((item)=> item.category === selectedCat)
    setFiltredProducts(filtredProduct)
  },[selectedCat])

  const handleOnCategoryChange = (e) => {
    setSelectedCat(e.target.value)
  }

  useEffect(()=> {
console.log("SELECTED PRICES HAS CHANGEd",selectedPrices)

  },selectedPrices)




  return (
    <div className="min-h-[80vh] w-[90%] m-4 p-4 ">
       <Link to={'/products/new'}> 
      <button className="w-[200px] float-right mb-4">
       New
        </button>
       </Link>
       <div>
          <select value={selectedCat} onChange={handleOnCategoryChange}>
            <option value={""}>---</option>
            <option value={"elctromenager"}>elctromenager</option>
            <option value={"jhbkhbkj"}>jhbkhbkj</option>
            <option value={"JHBEcjkb"}>JHBEcjkb</option>
          </select>
          <TwoThumbs 
          values={selectedPrices}
          setValues={setselectedPrices}
          />
       </div>
      <ProductsTable data={filtredProducts} />
    </div>
  );
};

export default ProductsPage;
