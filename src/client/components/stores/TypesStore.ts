import { ReduceStore } from "flux/utils";
import TypeDispatcher from "../../dispatcher/TypeDispatcher";
import { TypeActionTypes } from "../../constants/TypeActionTypes";
import { Type } from "../../models/Type";

class TypesStore extends ReduceStore<Type[], any> {
    constructor() {
        super(TypeDispatcher);
    }

    public getInitialState(): Type[] {
        return [];
    }

    public reduce(state, action): Type[] {
        switch (action.eventName) {
            case TypeActionTypes.ADD_TYPE:
                return [...state, action.type];
            case TypeActionTypes.DELETE_TYPE:
                return state.filter(t => t.id !== action.type.id);

            default:
                return state;
        }
    }
}

export default new TypesStore();
