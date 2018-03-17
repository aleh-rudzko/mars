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
    res.send(type);
    next();
});

typeRoutes.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const type = await getTypeService().findById(req.params.id);
    res.send(type);
    next();
});

export default typeRoutes;
