import { NextFunction, Request, Response } from "express";
import { BaseError, InternalServerError, MalformedJsonError, ValidationError } from "../errors";
import { Error as MongooseError } from "mongoose";

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err) {
        let error: BaseError;
        if (err instanceof BaseError) {
            error = err as BaseError;
        } else if (err instanceof MongooseError) {
            error = new ValidationError(err.toString());
        } else if (err instanceof SyntaxError) {
            const syntaxErrorReason = err.message ? err.message : "N/A";
            error = new MalformedJsonError(syntaxErrorReason);
        } else {
            error = new InternalServerError();
        }

        console.log(err); // tslint:disable-line

        res.status(error.status).send({
            code: error.code,
            message: error.message
        });
    }
}
