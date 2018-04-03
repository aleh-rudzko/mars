export class BaseError extends Error {
    constructor(public status: number, public code: number, public message: string) {
        super(message);
    }
}

export class InternalServerError extends BaseError {
    constructor() {
        super(500, 1, "Internal server error");
    }
}

export class CrudTypeNotFound<T> extends BaseError {
    constructor() {
        // tslint:disable
        // because const require an object for this type
        let constructor: { new (): T };
        // tslint:enable
        super(404, 100, constructor.name + " not found");
    }
}

export class ObjectNotFound extends BaseError {
    constructor(objectName: string = "Object") {
        super(404, 100, `${objectName} not found`);
    }
}

export class ValidationError extends BaseError {
    constructor(messages: string | string[]) {
        super(400, 101, `Validation error: ${messages}`);
    }
}

export class MalformedJsonError extends BaseError {
    constructor(reason: string) {
        super(400, 102, `Malformed JSON : ${reason}`);
    }
}
