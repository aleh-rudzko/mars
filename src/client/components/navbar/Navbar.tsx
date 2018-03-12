
import * as React from "react";

import './Navbar.less';


export default class Navbar extends React.Component {
    render() {
        return (
        	<div className="navbar">
	            <div className="navbar-container">
			        <ul className="navbar-list" role="navigation">
					    <li className="link">
						    <a href="#">Main</a>
					    </li>
					    <li className="link">
						    <a href="#">About</a>
					    </li>
					    <li className="navbar-logo">Logo</li>
					    <li><input placeholder="search"/></li>
					    <li><button>search</button></li>
				    </ul>
		        </div>
	        </div>
        )
    }
}