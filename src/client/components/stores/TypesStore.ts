import { ReduceStore } from "flux/utils";
import TypeDispatcher from "../../dispatcher/TypeDispatcher";
import { TypeActionTypes } from "../../constants/TypeActionTypes";
import {Type} from "../../models/Type";


class TypesStore extends ReduceStore<Type[], any> {
    constructor() {
	    super(TypeDispatcher);
    }

	getInitialState(): Type[] {
		return [];
	}

    reduce(state, action): Type[] {
        switch (action.eventName) {
            case TypeActionTypes.ADD_TYPE:
		        return [...state, action. type];

            default:
                return state;
        }
    }
}

export default new TypesStore();
