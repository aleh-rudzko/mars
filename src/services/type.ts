import { Type, TypeModel } from "../models/type";
import { Types } from "mongoose"

interface TypeService {
    all(): Promise<Type[]>;
    create(type: Type): Promise<Type>;
    findById(id: string): Promise<Type>;
}

class TypeServiceImpl implements TypeService {
    public all(): Promise<Type[]> {
        return new Promise((resolve, reject) => {
            TypeModel.find().then(resolve).catch(reject);
        })
    }

    public create(type: Type): Promise<Type> {
        return TypeModel.create(type);
    }

    public findById(id: string): Promise<Type> {
        return new Promise((resolve, reject) => {
            TypeModel.findOne({_id: Types.ObjectId(id)}).then(resolve).catch(reject);
        });
    }
}


let typeService: TypeService;

export default function getTypeService(): TypeService {
    if (!typeService) {
        typeService = new TypeServiceImpl();
    }
    return typeService;
};
