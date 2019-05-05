import React, { Component } from "react";
import GenderTab from "./GenderTab.js";
import Subscribe from "./Subscribe.js";


class Body extends Component {
    render() {
        let bodyStyle = {
            marginTop: 0,
            width: "auto",
            paddingLeft: 50,
            paddingRight: 50
        }
        let genderTabStyle = {
            marginRight: 200,
            textAlign: "center"
        }
        return(
            <section style={ bodyStyle }>
             <div style={genderTabStyle}>
                <GenderTab />
             </div>
             <Subscribe />
            </section>
            
        );
    }
}
export default Body;