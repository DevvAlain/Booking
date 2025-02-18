import productService from '../services/productService';

let createProduct = async (req, res) => {
    try {
        let response = await productService.createProduct(req.body, req.file);
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            errCode: -1,
            message: 'Internal Server Error'
        });
    }
};

let getAllProducts = async (req, res) => {
    try {
        let response = await productService.getAllProducts();
        return res.status(200).json(response);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            errCode: -1,
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    createProduct: createProduct,
    getAllProducts: getAllProducts
};