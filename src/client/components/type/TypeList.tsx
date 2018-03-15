import * as React from "react";
import * as Immutable from 'immutable';
import TypeItem from "./TypeItem";
import { Type } from "../../models/Type";

interface TypeListProps {
    types: Immutable.List<Type>
}

export default class TypeList extends React.Component<TypeListProps, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>TypeList</h1>
                {
                    this.props.types.map((type, index) => {
                        return <TypeItem key={index} name={type.name} description={type.description}/>
                    })

                }
            </div>

        )
    }
}
