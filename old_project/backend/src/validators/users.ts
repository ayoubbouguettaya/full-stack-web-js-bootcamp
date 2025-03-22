import Joi from "joi"

import validator from "express-joi-validation"

const createUserSchema = Joi.object({
userName: Joi.string().required(),
password: Joi.string().required()
})

const createUserValidator = validator.createValidator({}).body(createUserSchema)

export {createUserValidator}