import React, { useState } from "react";
import { Product } from "../../lib/types";
import ImageUploader from "./image-uploader";



type Props = {
  createProduct: (order: CreateProduct) => void;
};

export type CreateProduct = Omit<Product,"id"|"image">

const ProductForm = (props: Props) => {
  const [formData, setFormData] = useState<CreateProduct>({
    name: "",
    description: "",
    quantity: 0,
    category: ""
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    props.createProduct(formData);
  };


  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">name name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="quantity" >quantity:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <br />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ProductForm;
