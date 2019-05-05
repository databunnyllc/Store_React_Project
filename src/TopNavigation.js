import React, { Component } from "react";

class TopNavigation extends Component {
    render() {
        let navigation1Style = {
            float: "right"
        }
        let listStyle = {
            listStyleType: "none",
            display: "inline-block",
            paddingRight: 20,
            fontWeight: "bold",
            fontFamily: "acumin-pro-condensed, sans-serif",
            fontSize: 25
        }
        let navIconsStyle = {
            width: 25
        }
        return(
            <div id="navigation1" style={ navigation1Style }>
                <ul>
                    <li style={ listStyle }><a href="#"><img style={ navIconsStyle } src={require("./graphics/shoppingBag.png")}/></a></li>
                    <li style={ listStyle }><a href="#"><img style={ navIconsStyle } src={require("./graphics/US Flag.png")}/></a></li>
                </ul>
            </div>
        );
    }
}
export default TopNavigation;