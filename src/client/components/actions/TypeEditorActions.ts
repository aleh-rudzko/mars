import { Type } from "../../models/Type";
import { EditorTypeActionTypes } from "../../constants/EditorTypeActionTypes";
import TypeDispatcher from "../../dispatcher/TypeDispatcher";

const TypeEditorActions = {
    createMode() {
        TypeDispatcher.dispatch({
            eventName: EditorTypeActionTypes.EDITOR_CREATE
        });
    },
    updateMode(type: Type) {
        TypeDispatcher.dispatch({
            eventName: EditorTypeActionTypes.EDITOR_UPDATE,
            type
        });
    }
};

export default TypeEditorActions;
