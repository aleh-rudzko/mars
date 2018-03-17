import * as React from "react";
import Navbar from "./navbar/Navbar";
import "./App.less";
import TypeContainer from "./type/TypeContainer";


export default function App(props) {
	return (
		<div>
			<Navbar></Navbar>

			<div className="center">
				<h1>App</h1>
				<TypeContainer/>
			</div>
		</div>
	);
}
