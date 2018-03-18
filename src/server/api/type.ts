import { Router, NextFunction, Request, Response } from "express";
import getTypeService from "../services/type";

const typeRoutes = Router();

typeRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const types = await getTypeService().all();
    res.send(types);
    next();
});

typeRoutes.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const type = await getTypeService().create(req.body);
    res.status(200).send(type);
    next();
});

typeRoutes.get("/:typeId", async (req: Request, res: Response, next: NextFunction) => {
    const type = await getTypeService().findById(req.params.typeId);
    res.send(type);
    next();
});

typeRoutes.put("/:typeId", async (req: Request, res: Response, next: NextFunction) => {
    const type = await getTypeService().update({
        ...req.body,
        id: req.params.typeId
    });

    res.status(200).send(type);
    next();
});

typeRoutes.delete("/:typeId", async (req: Request, res: Response, next: NextFunction) => {
    await getTypeService().remove(req.params.typeId);

    res.status(204).end();
    next();
});

export default typeRoutes;
