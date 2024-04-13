import StatusCode from "./status-codes";

abstract class BaseError {
    public constructor(public status: number, public message: string) { }
}

export class RouteNotFound extends BaseError {
    public constructor(route: string) {
        super(StatusCode.NotFound, `Route ${route} not found.`);
    }
}

export class ResourceNotFound extends BaseError {
    public constructor(_id: string) {
        super(StatusCode.NotFound, `_id ${_id} not found.`);
    }
}

export class Validation extends BaseError {
    public constructor(message: string) {
        super(StatusCode.BadRequest, message);
    }
}

