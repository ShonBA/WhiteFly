import express, { NextFunction, Request, Response } from "express";
import personsService from "../5-services/persons-service";

const router = express.Router();

// GET http://localhost:4000/api/persons
router.get("/persons", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const persons = await personsService.getAllPersons();
        response.json(persons);
    }
    catch (err: any) {
        next(err);
    }
});
// GET http://localhost:4000/api/persons/_id
router.get("/persons/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id
        const person = await personsService.getPersonById(_id);
        response.json(person);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;