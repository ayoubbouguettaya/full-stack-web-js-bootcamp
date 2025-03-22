import axios from "axios";
import ProductForm from "../components/products/product-form";
import { Product } from "../lib/types";
import ImageUploader from "../components/products/image-uploader";
import { useState } from "react";
import { getAccessToken } from "../lib/get-token";

const NewProductPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleCreateProduct = async (newproduct: Product) => {
    const response = await axios.post('http://localhost:3000/products/create',newproduct,{
      headers: { Authorization: getAccessToken()}
    })
    console.log(response.data)

    handleUpload(response.data.id)
  }

  const handleUpload = async (productId) => {
    const formData = new FormData();
    formData.append("productImage", selectedFile);
    formData.append("productId",`${productId}`)

    try {
      const response = await axios.post(
        "http://localhost:3000/products/upload",
        formData,
        {headers: { Authorization: getAccessToken()}}
      );
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ProductForm createProduct={handleCreateProduct}/>
      <ImageUploader setSelectedFile={setSelectedFile} />
    </div>
  );
};

export default NewProductPage;
