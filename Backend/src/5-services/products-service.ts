import { ResourceNotFound, Validation } from "../3-models/error-models";
import { IProductModel, ProductModel } from "../3-models/product-model";

class ProductsService {

    // Get all products: 
    public getAllProducts(): Promise<IProductModel[]> {

        // Get all products without any virtual fields: 
        // return ProductModel.find().exec();
        
        // Get all products with specified virtual fields: 
        return ProductModel.find().populate("category").exec();
    }

    // Get one product:
    public async getOneProduct(_id: string): Promise<IProductModel> {
        const product = await ProductModel.findById(_id).exec();
        if (!product) throw new ResourceNotFound(_id);
        return product;
    }

    // Add product: 
    public addProduct(product: IProductModel): Promise<IProductModel> {
        const errors = product.validateSync();
        if (errors) throw new Validation(errors.message);
        return product.save();
    }

    // Update product: 
    public async updateProduct(product: IProductModel): Promise<IProductModel> {
        const errors = product.validateSync();
        if (errors) throw new Validation(errors.message);
        const options = { returnOriginal: false }; // Don't return given product, but return db product.
        const updatedProduct = await ProductModel.findByIdAndUpdate(product._id, product, options).exec();
        return updatedProduct;
    }

    // Delete product: 
    public async deleteProduct(_id: string): Promise<void> {
        const deletedProduct = await ProductModel.findByIdAndDelete(_id).exec();
        if (!deletedProduct) throw new ResourceNotFound(_id);
    }

    // Test Mongo Query Language:
    public testMQL(): Promise<IProductModel[]> {

        // // SELECT * FROM products
        // return ProductModel.find().exec();

        // // SELECT * FROM products WHERE price = 10
        // return ProductModel.find({ price: 10 }).exec();

        // // SELECT * FROM products WHERE price >= 10
        // return ProductModel.find({ price: { $gte: 10 } }).exec();

        // // SELECT * FROM products WHERE price >= 10 AND price <= 20
        // return ProductModel.find({ price: { $gte: 10, $lte: 20 } }).exec();

        // // SELECT * FROM products WHERE price = 10 OR price = 20
        // return ProductModel.find({ $or: [{ price: 10 }, { price: 20 }] }).exec();

        // // SELECT _id, name, price FROM products
        // return ProductModel.find(null, ["name", "price"]).exec();

        // // SELECT name, price FROM products
        // return ProductModel.find(null, { _id: false, name: true, price: true }).exec();

        // // SELECT * FROM products ORDER BY price ASC
        // return ProductModel.find(null, null, { sort: { price: 1 } }).exec(); // 1 = ASC

        // // SELECT * FROM products ORDER BY price DESC
        // return ProductModel.find(null, null, { sort: { price: -1 } }).exec(); // -1 = DESC

        // // SELECT * FROM products ORDER BY price ASC, name DESC
        // return ProductModel.find(null, null, { sort: { price: 1, name: -1 } }).exec();

        // // SELECT * FROM products LIMIT 10 OFFSET 20
        // return ProductModel.find(null, null, { limit: 10, skip: 20 }).exec();

        // // SELECT * FROM products WHERE name LIKE '%Ch%'
        // return ProductModel.find({ name: { $regex: "Ch" }}, null).exec(); // Contains "Ch"

        // // SELECT * FROM products WHERE name LIKE 'Ch%'
        // return ProductModel.find({ name: { $regex: "^Ch" }}, null).exec(); // Starts with "Ch"

        // SELECT name, price, stock FROM products WHERE stock > 0 AND price IN (10, 20, 30) ORDER BY price DESC
        return ProductModel.find(
            { stock: { $gt: 0 }, price: { $in: [10, 20, 30] } }, // filter
            { _id: false, name: true, price: true, stock: true }, // projection
            { sort: { price: -1 } } // options
        ).exec();

    }

}

const productsService = new ProductsService();

export default productsService;
