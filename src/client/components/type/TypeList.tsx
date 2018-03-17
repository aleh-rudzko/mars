import * as React from "react";
import TypeItem from "./TypeItem";
import {Type} from "../../models/Type";

interface TypeListProps {
	types: Type[],

	deleteType: (type: Type) => void
}

export default class TypeList extends React.Component<TypeListProps, {}> {
	constructor(props) {
		super(props);
	}

	deleteType(type: Type): void {
		this.props.deleteType(type)
	}

	render() {
		return (
			<div>
				<h1>TypeList</h1>
				{
					this.props.types.map((type, index) => {
						return (
							<div key={index}>
								<TypeItem id={type.id} name={type.name} description={type.description}/>
								<button onClick={ () => this.deleteType(type) }>remove</button>
							</div>
						)
					})
				}
			</div>
		)
	}
}
