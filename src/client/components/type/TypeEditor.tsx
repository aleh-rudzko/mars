import * as React from "react";
import { Type } from "../../models/Type";
import TypeFactory from "./TypeFactory";

export enum EditorMode {
    Create,
    Update
}

export interface TypeEditorState {
    mode: EditorMode,
    type: Type
}

interface TypeEditorProps {
    editor: TypeEditorState,

    onTypeAdd: (type: Type) => void;
    onTypeUpdate: (type: Type) => void;
    onEditorToCreateMode: () => void;
}

export default class TypeEditor extends React.Component<TypeEditorProps, TypeEditorState> {
    constructor(props: TypeEditorProps) {
        super(props);
    }

    public componentWillMount() {
        this.setState(this.props.editor);
    }

    public componentWillReceiveProps(nextProps) {
        this.setState(nextProps.editor);
        return true;
    }

    public handleNameChange = (event) => {
        this.setState({
            type: {
                id: this.state.type.id,
                name: event.target.value,
                description: this.state.type.description
            }
        });
    };

    public handleDescriptionChange = (event) => {
        this.setState({
            type: {
                id: this.state.type.id,
                name: this.state.type.name,
                description: event.target.value
            }
        });
    };

    public handleTypeAdd = () => {
        const newType: Type = TypeFactory();
        newType.name = this.state.type.name;
        newType.description = this.state.type.description;

        this.props.onTypeAdd(newType);
    };

    public handleTypeUpdate = () => {
        this.props.onTypeUpdate(this.state.type);
        this.props.onEditorToCreateMode();
    };

    public render() {
        const mode = this.props.editor.mode;
        let approveClick;
        let approveButtonText;
        switch (mode) {
            case EditorMode.Create:
                approveButtonText = 'create';
                approveClick = this.handleTypeAdd;
                break;
            case EditorMode.Update:
                approveButtonText = 'save';
                approveClick = this.handleTypeUpdate;
                break;
        }

        return (
            <div className="type-editor">
                <input
                    type="text"
                    placeholder="Enter name"
                    className="TypeEditor__name"
                    value={this.state.type.name}
                    onChange={this.handleNameChange}
                />
                <textarea
                    placeholder="Enter description"
                    rows={5}
                    className="TypeEditor__description"
                    value={this.state.type.description}
                    onChange={this.handleDescriptionChange}
                />
                <div className="TypeEditor__footer">
                    <button
                        className="TypeEditor__add"
                        disabled={!this.state.type.name}
                        onClick={approveClick}
                    >
                        {approveButtonText}
                    </button>
                </div>
            </div>
        );
    }
}
