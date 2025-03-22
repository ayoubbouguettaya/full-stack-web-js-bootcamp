import { NextFunction, Router,Request,Response } from "express"
import {rm} from "fs/promises"
import {join} from "path"
const productRouters = Router();

import { AppDataSource, publicDirectory } from "..";

import { ProductEntity } from "../entity/product.entity";
import { upload } from "../config/storage";

const cleanStaledProductImage = async (req: Request,res: Response,next: NextFunction) => {

  console.log("CLEAN STEALED PRODUCT")
  const productId  = req.body.productId;
  console.log("[CLEAN] productId ",productId)
  const productRepository = AppDataSource.getRepository(ProductEntity)
  const productFound = await productRepository.findOneBy({id: productId})

  if(!productFound?.image) return;

  const filePath = join(publicDirectory,"products",productFound.image) 
  console.log("[CLEAN] filePath ",filePath)
  
  await rm(filePath)
  
  next();
}

productRouters.post('/upload', upload.single('productImage'),cleanStaledProductImage, (req:any, res) => {
  const productRepository = AppDataSource.getRepository(ProductEntity)

  const productId = req.body.productId;


  console.log("[UPLOAD] productId",productId)
  console.log("[UPLOAD] fileName",req.fileName)

  productRepository.update({id: productId},{image: req.fileName})

  res.status(200).send({ message: 'File uploaded successfully' });
});

productRouters.get("/all", async (req, res) => {
  const productRepository = AppDataSource.getRepository(ProductEntity)

  const allproduct = await productRepository.find({})

  res.status(200).send(allproduct)

});

productRouters.post("/create", async (req, res) => {

  const productRepository = AppDataSource.getRepository(ProductEntity)

  const newProduct = new ProductEntity()

  newProduct.name = req.body.name
  newProduct.description = req.body.description
  newProduct.category = req.body.category
  newProduct.quantity = req.body.quantity

  await productRepository.save(newProduct)

  res.status(200).send(newProduct)
});


export default productRouters;
