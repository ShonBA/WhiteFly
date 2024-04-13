import express, { Request, Response, NextFunction } from "express";
import productsService from "../5-services/products-service";
import { ProductModel } from "../3-models/product-model";
import StatusCode from "../3-models/status-codes";

const router = express.Router();

// GET http://localhost:4000/api/products
router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productsService.getAllProducts();
        response.json(products);
    }
    catch (err: any) { 
        next(err);
    }
});

// GET http://localhost:4000/api/products/5e91e29b9c08fc560ce2cf3a
router.get("/products/:_id([a-f0-9]{24})", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id;
        const product = await productsService.getOneProduct(_id);
        response.json(product);
    }
    catch (err: any) { 
        next(err);
    }
});

// POST http://localhost:4000/api/products
router.post("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(request.body);
        const addedProduct = await productsService.addProduct(product);
        response.status(StatusCode.Created).json(addedProduct);
    }
    catch (err: any) { 
        next(err);
    }
});

// PUT http://localhost:4000/api/products/5e91e29b9c08fc560ce2cf3a
router.put("/products/:_id([a-f0-9]{24})", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body._id = request.params._id;
        const product = new ProductModel(request.body);
        const updatedProduct = await productsService.updateProduct(product);
        response.json(updatedProduct);
    }
    catch (err: any) { 
        next(err);
    }
});

// DELETE http://localhost:4000/api/products/5e91e29b9c08fc560ce2cf3a
router.delete("/products/:_id([a-f0-9]{24})", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id;
        await productsService.deleteProduct(_id);
        response.sendStatus(StatusCode.NoContent);
    }
    catch (err: any) { 
        next(err);
    }
});

// GET http://localhost:4000/api/test-mql
router.get("/test-mql", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productsService.testMQL(); // Mongo Query Language
        response.json(products);
    }
    catch (err: any) { 
        next(err);
    }
});

export default router;