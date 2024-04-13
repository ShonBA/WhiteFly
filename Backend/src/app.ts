import express from "express";
import appConfig from "./2-utils/app-config";
import catchAll from "./4-middleware/catch-all";
import routeNotFound from "./4-middleware/route-not-found";
import productsController from "./6-controllers/products-controller";
import dal from "./2-utils/dal";

// Creating the server:
const server = express();

// Creating a request.body object containing the request body data:
server.use(express.json());

// Connect our controllers: 
server.use("/api", productsController);

// Route not found:
server.use(routeNotFound);

// Catch all middleware:
server.use(catchAll);

// Running the server:
server.listen(appConfig.port, async () => {
    await dal.connect(); // Connecting to MongoDB once.
    console.log("Listening on http://localhost:" + appConfig.port);
});
