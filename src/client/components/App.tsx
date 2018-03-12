import * as React from "react";
import TypeEditor from "./type/TypeEditor";
import TypeList from "./type/TypeList";
import Navbar from "./navbar/Navbar";

import "./App.less";
import { Type } from "../models/Type";
import TypesStore from "./stores/TypesStore";


interface AppState {
    types: Type[]
}

// const getStateFromFlux = () => {
//     return {
//         isLoading: TypesStore.isLoading(),
//         types: TypesStore.getTypes()
//     }
// }

export default class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            types: [
                {
                    name: "Test",
                    description: "Description1"
                },
                {
                    name: "Test",
                    description: "Description1"
                }
            ]
        }
    }
    handleTypeAdd = (newType: Type) => {
        this.setState({
            types: [...this.state.types, newType]
        });
    };

    render() {
        return (
            <div>
                <Navbar></Navbar>

                <div className="center">
                    <h1>App</h1>
                    <TypeEditor onTypeAdd={this.handleTypeAdd}/>
                    <TypeList types={this.state.types}/>
                </div>
            </div>
        );
    }
}