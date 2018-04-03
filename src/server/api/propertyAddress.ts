import { Router, NextFunction, Request, Response } from "express";
import getPropertyAddressService from "../services/propertyAddress";

const addressRoutes = Router();

addressRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const addresses = await getPropertyAddressService().all();
        res.send(addresses);
        next();
    } catch (err) {
        next(err);
    }

});

addressRoutes.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const address = await getPropertyAddressService().create(req.body);
        res.status(201).send(address);
        next();
    } catch (err) {
        next(err);
    }
});

addressRoutes.get("/:addressId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const address = await getPropertyAddressService().findById(req.params.addressId);
        res.send(address);
        next();
    } catch (err) {
        next(err);
    }
});

addressRoutes.put("/:addressId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const address = await getPropertyAddressService().update({
            ...req.body,
            id: req.params.addressId
        });
        res.send(address);
        next();
    } catch (err) {
        next(err);
    }
});

addressRoutes.delete("/:addressId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getPropertyAddressService().remove(req.params.addressId);

        res.status(204).end();
        next();
    } catch (err) {
        next(err);
    }
});

export default addressRoutes;
