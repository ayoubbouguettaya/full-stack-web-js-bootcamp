import { Router } from "express"

import jwt from "jsonwebtoken";

import { AppDataSource } from "..";
import { UserEntity } from "../entity/user.entity";
import { AUTH_SECRET } from "../config/constants";
import { DecodedToken } from "../types";
import bcrypt from "bcrypt"

const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  const userRepository = AppDataSource.getRepository(UserEntity)

  const { userName, password } = req.body;

  const userFound = await userRepository.findOneBy({ userName: userName })

  if (!userFound) {
    res.status(403).send("User Credential Wrong")
    return;
  }

  const matchPassword = await bcrypt.compare(password, userFound.password)
  if (!matchPassword) {
    res.status(403).send("User Credential Wrong")
    return;
  }

  const data: DecodedToken = {
    userId: userFound.id,
  }
  console.log("AUTH_SECRET",AUTH_SECRET)

  const token = jwt.sign(data, AUTH_SECRET, { expiresIn: '1h' });

  res.status(200).send({ token })

});



export default authRouter;
