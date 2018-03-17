import * as React from "react";
import { Type } from "../../models/Type";
import TypeFactory from "./TypeFactory";

interface TypeEditorProps {
    onTypeAdd: (type: Type) => void;
}

interface TypeEditorState {
    name: string;
    description: string;
}

export default class TypeEditor extends React.Component<TypeEditorProps, TypeEditorState> {
    constructor(props: TypeEditorProps) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };
    }

    public handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    public handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    public handleTypeAdd = () => {
        const newType: Type = TypeFactory();
        newType.name = this.state.name;
        newType.description = this.state.description;

        this.props.onTypeAdd(newType);
        this.setState({
            name: "",
            description: ""
        });
    }

    public render() {
        return (
            <div className="type-editor">
                <input
                    type="text"
                    placeholder="Enter name"
                    className="TypeEditor__name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <textarea
                    placeholder="Enter description"
                    rows={5}
                    className="TypeEditor__description"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                />
                <div className="TypeEditor__footer">
                    <button
                        className="TypeEditor__add"
                        disabled={!this.state.name}
                        onClick={this.handleTypeAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}