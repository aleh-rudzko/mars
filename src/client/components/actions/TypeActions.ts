import { Type } from "../../models/Type";
import TypeDispatcher from "../../dispatcher/TypeDispatcher";

const Actions = {
    addType(type: Type) {
        TypeDispatcher.dispatch({
            eventName: TypeActions.ADD_TYPE,
            type
        })
    }
};

export default Actions;
