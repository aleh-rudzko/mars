import { getTypeModel } from "../models/type";
import { Type } from "../interfaces/type";

interface TypeService {
    all(): Promise<Type[]>;
    create(type: Type): Promise<Type>;
    findById(id: string): Promise<Type>;
    update(type: Type): Promise<Type>;
}

class TypeServiceImpl implements TypeService {
    public async all(): Promise<Type[]> {
        return getTypeModel().find();
    }

    public create(type: Type): Promise<Type> {
        return getTypeModel().create(type);
    }

    public async findById(id: string): Promise<Type> {
        return getTypeModel().findById(id);
    }

    public async update(type: Type): Promise<Type> {
        return getTypeModel().findByIdAndUpdate(type.id, type);
    }
}

let typeService: TypeService;

export default function getTypeService(): TypeService {
    if (!typeService) {
        typeService = new TypeServiceImpl();
    }
    return typeService;
}
