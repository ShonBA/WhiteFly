import cors from "cors";
import express from "express";
import appConfig from "./2-utils/app-config";
import dal from "./2-utils/dal";
import catchAll from "./4-middleware/catch-all";
import routeNotFound from "./4-middleware/route-not-found";
import personController from "./6-controllers/persons-controller";

// Creating the server:
const server = express();

server.use(cors());

// Creating a request.body object containing the request body data:
server.use(express.json());

// Connect our controllers: 
server.use("/api", personController);

// Route not found:
server.use(routeNotFound);

// Catch all middleware:
server.use(catchAll);

// Running the server:
server.listen(appConfig.port, async () => {
    await dal.connect(); // Connecting to MongoDB once.
    console.log("Listening on http://localhost:" + appConfig.port);
});
