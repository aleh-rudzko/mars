import * as React from "react";
import {Type} from "../../models/Type";


export default class TypeItem extends React.Component<Type, {}> {
    render() {
        return <h1>{this.props.name}</h1>;
    }
}
