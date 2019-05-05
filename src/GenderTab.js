import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home.js";
import Men from "./Men.js";
import Women from "./Women.js";
import Kids from "./Kids.js";
import Art from "./Art.js";

let Black = "#362f2d";

class GenderTab extends Component {
    render() {
        let listStyle = {
            listStyleType: "none",
            display: "inline-block",
            paddingRight: 20,
            fontWeight: "bold",
            fontFamily: "acumin-pro-condensed, sans-serif",
            fontSize: 25
        }
        let navigation2Style = {
            display: "inline-block",
            position: "relative",
            left: "60px"
        }
        let navLinkStyle = {
            color: Black
        }
        return(
            <HashRouter>
            <div id="navigation2" style={ navigation2Style }>
                <div id="genderNavContainer">
                    <ul>
                        <li style={ listStyle }><NavLink style={ navLinkStyle } to="/Home">HOME</NavLink></li>
                        <li style={ listStyle }><NavLink style={ navLinkStyle } to="/Men">MEN</NavLink></li>
                        <li style={ listStyle }><NavLink style={ navLinkStyle } to="/Women">WOMEN</NavLink></li>
                        <li style={ listStyle }><NavLink style={ navLinkStyle } to="/Kids">KIDS</NavLink></li>
                        <li style={ listStyle }><NavLink style={ navLinkStyle } to="/Art">ART</NavLink></li>
                    </ul>
                    <hr/>
                    <div className="content">
                        <Route path="/Home" component={Home}/>
                        <Route path="/Men" component={Men}/>
                        <Route path="/Women" component={Women}/>
                        <Route path="/Kids" component={Kids}/>
                        <Route path="/Art" component={Art}/>
                    </div>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default GenderTab;