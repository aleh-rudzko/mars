import * as React from "react";
import {Container} from 'flux/utils';
import TypesStore from "../stores/TypesStore";
import TypeActions from "../actions/TypeActions";
import TypeEditor from "./TypeEditor";
import TypeList from "./TypeList";
import TypeEditorActions from "../actions/TypeEditorActions";


function getStores() {
    return [
        TypesStore,
    ];
}

function getState() {
    return {
        typesStore: TypesStore.getState(),

        addType: TypeActions.addType,
        deleteType: TypeActions.deleteType,
        updateType: TypeActions.updateType,

        editorToUpdateMode: TypeEditorActions.updateMode,
        editorToCreateMode: TypeEditorActions.createMode
    };
}

function ContainerView(props) {
	return (
		<div>
			<TypeEditor editor={ props.typesStore.editor }

                        onTypeAdd={ props.addType }
                        onTypeUpdate={ props.updateType}
                        onEditorToCreateMode={props.editorToCreateMode}
            />
			<TypeList types={ props.typesStore.types }
                      deleteType={ props.deleteType }
                      updateType={ props.editorToUpdateMode }
            />
		</div>
	);
}

export default Container.createFunctional(ContainerView, getStores, getState);
