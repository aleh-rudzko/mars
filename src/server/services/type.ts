import { getTypeModel } from "../models/type";
import { Type } from "../interfaces/type";
import { ObjectNotFound } from "../errors";

interface TypeService {
    all(): Promise<Type[]>;

    create(type: Type): Promise<Type>;

    findById(id: string): Promise<Type>;

    update(type: Type): Promise<Type>;

    remove(id: string): Promise<Type>;
}

class TypeServiceImpl implements TypeService {
    public async all(): Promise<Type[]> {
        return getTypeModel().find();
    }

    public create(type: Type): Promise<Type> {
        return getTypeModel().create(type);
    }

    public async findById(id: string): Promise<Type> {
        const type = await getTypeModel().findById(id);
        if (!type) {
            return Promise.reject(new ObjectNotFound("Type"));
        }
        return type;
    }

    public async update(type: Type): Promise<Type> {
        const updatedType = await getTypeModel().findByIdAndUpdate(type.id, type, { "new": true });
        if (!updatedType) {
            return Promise.reject(new ObjectNotFound("Type"));
        }
        return updatedType;
    }

    public async remove(id: string): Promise<Type> {
        const type = await getTypeModel().findByIdAndRemove(id);
        if (!type) {
            return Promise.reject(new ObjectNotFound("Type"));
        }
        return type;
    }
}

let typeService: TypeService;

export default function getTypeService(): TypeService {
    if (!typeService) {
        typeService = new TypeServiceImpl();
    }
    return typeService;
}
