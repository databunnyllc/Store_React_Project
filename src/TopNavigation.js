import React, { Component } from "react";
import "./topNavigation.css";

class TopNavigation extends Component {
    render() {
        let navigation1Style = {
            float: "right"
        }
        let navIconsStyle = {
            width: 25
        }
        return(
            <div id="navigation1" style={ navigation1Style }>
                <ul>
                    <li id="shoppingBag"><a href="#"><img style={ navIconsStyle } src={require("./graphics/shoppingBag.png")}/></a>
                        <ul>
                            <p>Empty</p>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
export default TopNavigation;

