import { Router, NextFunction, Request, Response } from "express";
import getTypeService from "../services/type";

const typeRoutes = Router();

typeRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const types = await getTypeService().all();
        res.send(types);
        next();
    } catch (err) {
        next(err);
    }

});

typeRoutes.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const type = await getTypeService().create(req.body);
        res.status(201).send(type);
        next();
    } catch (err) {
        next(err);
    }
});

typeRoutes.get("/:typeId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const type = await getTypeService().findById(req.params.typeId);
        res.send(type);
        next();
    } catch (err) {
        next(err);
    }
});

typeRoutes.put("/:typeId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const type = await getTypeService().update({
            ...req.body,
            id: req.params.typeId
        });
        res.send(type);
        next();
    } catch (err) {
        next(err);
    }
});

typeRoutes.delete("/:typeId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getTypeService().remove(req.params.typeId);

        res.status(204).end();
        next();
    } catch (err) {
        next(err);
    }
});

export default typeRoutes;
