import * as React from "react";
import TypeItem from "./TypeItem";
import { Type } from "../../models/Type";

interface TypeListProps {
    types: Type[]
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
                        return <TypeItem key={index}/>
                    })

                }
            </div>

        )
    }
}