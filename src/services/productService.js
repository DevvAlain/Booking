import db from '../models/index';
import { uploadImage } from "./imageService";


let createProduct = async (data, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Kiểm tra các trường cần thiết
            if (!data.name || !data.price || !data.description || !data.date) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required fields",
                });
                return;
            }

            // Nếu có file ảnh, tiến hành upload ảnh
            let imageUrl = null;
            if (file) {
                try {
                    imageUrl = await uploadImage(file); // Upload ảnh và lấy URL
                } catch (error) {
                    console.error("Lỗi upload ảnh:", error);
                    resolve({
                        errCode: 2,
                        errMessage: "Lỗi khi upload ảnh",
                    });
                    return;
                }
            }

            await db.Product.create({
                image_url: imageUrl,
                name: data.name,
                description: data.description,
                price: data.price,
                date: data.date,
            });

            resolve({
                errCode: 0,
                errMessage: "Create service successfully",
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getAllProducts = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll();
            products = products.map((product) => {
                if (product.image_url) {
                    product.image_url = product.image.toString();
                }
                return product;
            })
            resolve(products);
        } catch (e) {
            reject(e);
        }
    });
};


module.exports = {
    createProduct: createProduct,
    getAllProducts: getAllProducts
};