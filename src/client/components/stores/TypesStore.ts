import { ReduceStore } from "flux/utils";
import TypeDispatcher from "../../dispatcher/TypeDispatcher";
import { TypeActionTypes } from "../../constants/TypeActionTypes";
import { Type } from "../../models/Type";
import TypeFactory from "../type/TypeFactory";
import { EditorTypeActionTypes } from "../../constants/EditorTypeActionTypes";
import { EditorMode, TypeEditorState } from "../type/TypeEditor";

interface TypesStoreState {
    editor: TypeEditorState;
    types: Type[];
}

class TypesStore extends ReduceStore<TypesStoreState, any> {
    constructor() {
        super(TypeDispatcher);
    }

    public getInitialState(): TypesStoreState {
        return {
            editor: {
                mode: EditorMode.Create,
                type: TypeFactory()
            },
            types: []
        };
    }

    public reduce(state, action): TypesStoreState {
        let types = state.types;
        let editor = state.editor;
        switch (action.eventName) {
            case TypeActionTypes.ADD_TYPE:
                types = [...state.types, action.type];
                break;
            case TypeActionTypes.DELETE_TYPE:
                types = state.types.filter(t => t.id !== action.type.id);
                break;
            case TypeActionTypes.UPDATE_TYPE:
                types = state.types.map(t => {
                    if (t.id !== action.type.id) { return t; }
                    return action.type;
                });
                break;

            case EditorTypeActionTypes.EDITOR_UPDATE:
                editor = {
                    mode: EditorMode.Update,
                    type: action.type
                };
                break;
            case EditorTypeActionTypes.EDITOR_CREATE:
                editor = {
                    mode: EditorMode.Create,
                    type: TypeFactory()
                };
                break;

            default:
                return state;
        }
        return {
            editor: editor,
            types: types
        };
    }
}

export default new TypesStore();
