import { Container } from "flux/utils";
import * as React from "react";
import {Container} from 'flux/utils';
import TypesStore from "../stores/TypesStore";
import TypeActions from "../actions/TypeActions";
import TypeEditor from "./TypeEditor";
import TypeList from "./TypeList";


function getStores() {
    return [
        TypesStore,
    ];
}

function getState() {
    return {
        types: TypesStore.getState(),

        addType: TypeActions.addType,
        deleteType: TypeActions.deleteType
    };
}

function ContainerView(props) {
	return (
		<div>
			<TypeEditor onTypeAdd={props.addType}/>
			<TypeList types={props.types} deleteType={props.deleteType}/>
		</div>
	);
}

export default Container.createFunctional(ContainerView, getStores, getState);
