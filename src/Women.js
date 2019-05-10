import React, { Component } from "react";

class Women extends Component {
    render() {
        let tableTitleStyle = {
            color: "grey"
        }
        let tableStyle = {
            border: "1px solid grey",
            backgroundColor: "White",
            width: "100%"
        }
        let tableDataStyle = {
            border: "1px solid grey",
            padding: "5px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "30px"
        }
        let tableImages = {
            width: "300px"
        }
        return(
            <div>
                <h2 style={ tableTitleStyle }>WOMENS</h2>
                <table style= { tableStyle }>
                    <tr>
                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/WBlissfullyLiving.PNG")}/>
                            <p>Blissfully Living</p>
                            <h4>$30.00</h4>
                            <a href="#"><button>View</button></a>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/WLetsHaveABeer.PNG")}/>
                            <p>Let's Have A Beer</p>
                            <h4>$30.00</h4>
                            <a href="#"><button>View</button></a>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/WAllMight,AllPower.PNG")}/>
                            <p>All Might, All Power</p>
                            <h4>$30.00</h4>
                            <a href="#"><button>View</button></a>
                        </td>
                    </tr>

                    <tr>
                        <td style={ tableDataStyle } >
                            <img style={ tableImages } src={require("./images/WIKeepItOneHundred.PNG")}/>
                            <p>I Keep It One Hundred!!!</p>
                            <h4>$30.00</h4>
                            <a href="#"><button>View</button></a>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/WAmaterasu.PNG")}/>
                            <p>Amaterasu</p>
                            <h4>$30.00</h4>
                            <a href="#"><button>View</button></a>
                        </td>

                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/WTheWorldIsMyCanvas.PNG")}/>
                            <p>The World is My Canvas</p>
                            <h4>$30.00</h4>
                            <a href="#"><button>View</button></a>
                        </td>
                    </tr>
                    <tr>
                        <td style={ tableDataStyle }>
                            <img style={ tableImages } src={require("./images/WNoodleGeisha.PNG")}/>
                            <p>Noodle Geisha</p>
                            <h4>$30.00</h4>
                            <a href="#"><button>View</button></a>
                        </td>
                    </tr>
                </table>
                <hr/>
            </div>
        );
    }
}
export default Women;