import * as express from "express";

export default function forwardTo404(err: any, req: express.Request, res: express.Response,
                                     next: express.NextFunction) {
    err.status = 404;
    next(err);
}
