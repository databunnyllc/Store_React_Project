import React, { Component } from "react";

let Brown = "#8c6239";
let Black = "#362f2d";
let LightBrown = "#e4cebe";
let LightGrey = "#e0e0e0";

class SearchBar extends Component {
    render() {
        let searchContainerStyle = {
            display: "inline-block",
            marginTop: 25,
            float: "right"
        }
        let searchBarContainerStyle = {
            border: "1px solid black",
            padding: 5,
            width: 300,
            backgroundColor: LightBrown,
            borderRadius: 25
        }
        let searchInputStyle = {
            border: "none",
            width: 250,
            outline: "none",
            fontSize: 20,
            fontFamily: "acumin-pro-condensed, sans-serif",
            backgroundColor: LightBrown,
            color: Black
        };
        return(
            <div id="searchContainer" style= { searchContainerStyle }>
                <form>
                    <div id="searchBarContainer" style={ searchBarContainerStyle }>
                        <span><i class="fas fa-search"></i></span><input style={ searchInputStyle } placeholder=" SEARCH"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar