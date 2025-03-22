import React, { useState } from "react";

export type Order = {
  "product": string,
"customer": string,
"quantity": number
}

type Props = {
  addOrder: (order: Order) => void;
};


const OrderForm = (props: Props) => {
  const [formData, setFormData] = useState<Order>({
    product: "",
    customer: "",
    quantity: 0,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    props.addOrder(formData);
  };

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="name">product name:</label>
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="customer">customer:</label>
        <input
          type="text"
          name="customer"
          value={formData.customer}
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

export default OrderForm;
