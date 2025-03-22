import { Router } from "express"
import bcypt from "bcrypt";

const usersRouter = Router();

import { AppDataSource } from "..";
import { UserEntity } from "../entity/user.entity";
import { RequestWithDecodeToken } from "../types";
import { createUserValidator } from "../validators/users"

usersRouter.post("/create", createUserValidator, async (req, res) => {

  const userRepository = AppDataSource.getRepository(UserEntity)

  const newUser = new UserEntity()
  newUser.userName = req.body.userName;

  const incomingPassword = req.body.password

  const hashSalt = await bcypt.genSalt(10);
  newUser.password = await bcypt.hash(incomingPassword,hashSalt);

  console.log(newUser.password)
  await userRepository.save(newUser)

  res.status(200).send({
    message: "User Created Succefully",
    user: newUser
  })

});

usersRouter.get("/current", async (req: RequestWithDecodeToken, res) => {

  const userRepository = AppDataSource.getRepository(UserEntity)


  const userFound =
    await userRepository.findOne(
      {
        where: { id: req.decodedToken.userId },
        select: { id: true, userName: true }
      }
    )

  console.log(req.decodedToken)

  if (!userFound) {
    return res.status(404).send({ message: "user doesn't existe" })
  }



  res.status(200).send({ id: userFound.id, userName: userFound.userName })

});

export default usersRouter;
