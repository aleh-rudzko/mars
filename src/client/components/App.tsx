import * as React from "react";
import TypeEditor from "./type/TypeEditor";
import TypeList from "./type/TypeList";
import Navbar from "./navbar/Navbar";
import "./App.less";


export default function App(props) {
	return (
        <div>
            <Navbar></Navbar>

            <div className="center">
                <h1>App</h1>
                <TypeEditor onTypeAdd={props.addType}/>
                <TypeList types={props.types}/>
            </div>
        </div>
	);
}
