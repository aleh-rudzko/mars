import { Router, NextFunction, Request, Response } from "express";
import getEntityService from "../services/entity";

const entityRoutes = Router();

entityRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entities = await getEntityService().all();
        res.send(entities);
        next();
    } catch (err) {
        next(err);
    }

});

entityRoutes.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entity = await getEntityService().create(req.body);
        res.status(201).send(entity);
        next();
    } catch (err) {
        next(err);
    }
});

entityRoutes.get("/:entityId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entity = await getEntityService().findById(req.params.entityId);
        res.send(entity);
        next();
    } catch (err) {
        next(err);
    }
});

entityRoutes.put("/:entityId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const entity = await getEntityService().update({
            ...req.body,
            id: req.params.entityId
        });
        res.send(entity);
        next();
    } catch (err) {
        next(err);
    }
});

entityRoutes.delete("/:entityId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getEntityService().remove(req.params.entityId);

        res.status(204).end();
        next();
    } catch (err) {
        next(err);
    }
});

export default entityRoutes;
