import Product from "../models/product.js";
import productValid from "../validations/product.js";

class ProductController {
    async getAllProducts(req, res) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getProductDetail(req, res) {
        try {
            const product = await Product.findById(req.params.id)
            if (!product) {
                return res.status(404).json({
                    message: "Product Not Found!"
                })
            }
            return res.status(200).json({
                message: "get Product detail is Done!",
                data: product
            })

        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
    async createProduct(req, res) {
        try {
            const { error } = productValid.validate(req.body, { abortEarly: true })
            if (error) {
                const errorMessage = error.details.map((detail) => detail.message)
                return res.status(400).json({
                    message: errorMessage
                })
            }
            const product = await Product.create(req.body)
            if (!product) {
                return res.status(404).json({
                    message: "Product Not Found!"
                })
            }
            return res.status(200).json({
                message: "Create Product is Done!",
                data: product
            })
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
    async updateProduct(req, res) {
        try {
            const { error } = productValid.validate(req.body, { abortEarly: true })
            if (error) {
                const errorMessage = error.details.map((detail) => detail.message)
                return res.status(400).json({
                    message: errorMessage
                })
            }
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            if (!product) {
                return res.status(404).json({
                    message: "Product Not Found!"
                })
            }
            return res.status(200).json({
                message: "Edit Product is Done!",
                data: product
            })
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
    async deleteProduct(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id)
            if (!product) {
                return res.status(404).json({
                    message: "Product Not Found!"
                })
            }
            return res.status(200).json({
                message: "Delete Product is Done!",
                data: product
            })

        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export default ProductController