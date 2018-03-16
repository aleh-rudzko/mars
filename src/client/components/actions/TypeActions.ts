import { Type } from "../../models/Type";
import TypeDispatcher from "../../dispatcher/TypeDispatcher";
import {TypeActionTypes} from "../../constants/TypeActionTypes";


const TypeActions = {
    addType(type: Type) {
        TypeDispatcher.dispatch({
            eventName: TypeActionTypes.ADD_TYPE,
            type
        })
    }
};

export default TypeActions;
