import * as React from "react";
import { Type } from "../../models/Type";

export default class TypeItem extends React.Component<Type, {}> {
    public render() {
        return (
            <div>
                <h1>{this.props.name} {this.props.id}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }
}
