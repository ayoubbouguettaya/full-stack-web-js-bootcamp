import { Router } from "express"

const ordersRouters = Router();

import { AppDataSource } from "..";
import { OrderEntity } from "../entity/order.entity";


ordersRouters.get("/all", async (req, res) => {

  
  const orderRepository = AppDataSource.getRepository(OrderEntity)

  const allOrders = await orderRepository.find({
    take: 1,
    skip: 1
  })


  res.status(200).send(allOrders)

});

ordersRouters.post("/create", async (req, res) => {

  const orderRepository = AppDataSource.getRepository(OrderEntity)

  const newOrder = new OrderEntity()

  newOrder.product = req.body.product
  newOrder.customer = req.body.customer
  newOrder.quantity = req.body.quantity

  await orderRepository.save(newOrder)

  res.status(200).send(newOrder)
});

ordersRouters.put("/:orderId", async (req, res) => {

  console.log("update order===")
  console.log(req.body)

  const orderRepository = AppDataSource.getRepository(OrderEntity)

  const { orderId } = req.params;

  const orderFound = orderRepository.update({ id: +orderId }, req.body)

  res.status(200).send(orderFound)
});

export default ordersRouters;
