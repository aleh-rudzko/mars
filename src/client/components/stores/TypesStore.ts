import { ReduceStore } from "flux/utils";
import * as Immutable from 'immutable';
import TypeDispatcher from "../../dispatcher/TypeDispatcher";
import { TypeActionTypes } from "../../constants/TypeActionTypes";
import {Type} from "../../models/Type";


class TypesStore extends ReduceStore<Immutable.List<Type>, any> {
    constructor() {
	    super(TypeDispatcher);
    }

	getInitialState(): Immutable.List<Type> {
		return Immutable.List<Type>();
	}

    reduce(state, action): Immutable.List<Type> {
        switch (action.eventName) {
            case TypeActionTypes.ADD_TYPE:
		        return state.push(action.type);

            default:
                return state;
        }
    }
}

export default new TypesStore();
