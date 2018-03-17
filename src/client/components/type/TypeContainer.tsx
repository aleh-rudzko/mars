import {Container} from 'flux/utils';
import TypesStore from "../stores/TypesStore";
import TypeActions from "../actions/TypeActions";
import App from "../App"


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

export default Container.createFunctional(App, getStores, getState);
