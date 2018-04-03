import { NextFunction, Request, Response, Router } from "express";
import { CRUDMongooseService } from "../services/crud";
import BaseModel from "../interfaces/base";

export default function CRUDAPI(crudService: CRUDMongooseService<BaseModel>) {
    const router = Router();

    router.get("/", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const instances = await crudService.all();
            res.send(instances);
            next();
        } catch (err) {
            next(err);
        }
    });

    router.post("/", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const instance = await crudService.create(req.body);
            res.status(201).send(instance);
            next();
        } catch (err) {
            next(err);
        }
    });

    router.get("/:instanceId", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const instance = await crudService.get(req.params.instanceId);
            res.send(instance);
            next();
        } catch (err) {
            next(err);
        }
    });

    router.put("/:instanceId", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const instance = await crudService.update({
                ...req.body,
                id: req.params.instanceId
            });
            res.send(instance);
            next();
        } catch (err) {
            next(err);
        }
    });

    router.delete("/:instanceId", async (req: Request, res: Response, next: NextFunction) => {
        try {
            await crudService.remove(req.params.instanceId);
            res.status(204).end();
            next();
        } catch (err) {
            next(err);
        }
    });

    return router;
}
