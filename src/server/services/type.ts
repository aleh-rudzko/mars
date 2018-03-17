import { Type, getTypeModel } from "../models/type";
import { Types } from "mongoose";

interface TypeService {
    all(): Promise<Type[]>;
    create(type: Type): Promise<Type>;
    findById(id: string): Promise<Type>;
}

class TypeServiceImpl implements TypeService {
    public async all(): Promise<Type[]> {
        return getTypeModel().find();
    }

    public create(type: Type): Promise<Type> {
        return getTypeModel().create(type);
    }

    public findById(id: string): Promise<Type> {
        return new Promise((resolve, reject) => {
            getTypeModel().findOne({_id: Types.ObjectId(id)}).then(resolve).catch(reject);
        });
    }
}

let typeService: TypeService;

export default function getTypeService(): TypeService {
    if (!typeService) {
        typeService = new TypeServiceImpl();
    }
    return typeService;
}
