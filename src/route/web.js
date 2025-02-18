import express from "express";
import userController from '../controllers/userController';
import productController from '../controllers/productController';
import multer from "multer";



let router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

let initWebRoutes = (app) => {

    // User API
    router.post("/api/register", userController.handleRegister);
    router.post('/api/login', userController.handleLoging);
    // router.get('/api/get-all-users', userController.handleGetAllUsers);

    // Product API
    router.post(
        "/api/create-product",
        upload.single("imageFile"),
        productController.createProduct
    );
    router.get("/api/get-all-products", productController.getAllProducts);
    return app.use("/", router);
}

module.exports = initWebRoutes;