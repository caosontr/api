import Joi from "joi";

const productValid = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required().min(0),
    rating: Joi.number().required().min(0).max(5),
    description: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    brand: Joi.string().required(),
})

export default productValid
