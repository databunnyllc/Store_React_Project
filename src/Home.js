import React, { Component } from "react";

class Boxes extends Component {
    render() {
        let boxListContainerStyle = {
            marginTop: 50,
            marginLeft: 55,
            textAlign: "center"
        }
        let boxListStyle = {
            listStyleType: "none",
            display: "inline-block",
            marginRight: 15
        }
        let boxImageListStyle = {
            width: "23vw"
        }
        return(
            <div style={ boxListContainerStyle }>
                <ul>
                    <li style={ boxListStyle }><a href="#"><img style={ boxImageListStyle } src={require("./images/boxImage1.png")} /></a></li>
                    <li style={ boxListStyle }><a href="#"><img style={ boxImageListStyle } src={require("./images/boxImage2.png")} /></a></li>
                    <li style={ boxListStyle }><a href="#"><img style={ boxImageListStyle } src={require("./images/boxImage3.png")} /></a></li>
                </ul>
            </div>  
        );
    }
}



class Home extends Component {
    render() {
        let carouselStyle = {
            width: "90%",
            marginLeft: "8%",
            marginRight: "5%"
        }
        return(
            <section>
                <div style={ carouselStyle } id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                
                {/** The Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ul>

                {/** The SlideShow */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={require("./images/slide1.png")} alt="First slide"/>
                            </div>

                            <div className="carousel-item">
                                <img className="d-block w-100" src={require("./images/slide2.png")} alt="Second slide"/>
                            </div>
                            
                            <div className="carousel-item">
                                <img className="d-block w-100" src={require("./images/slide3.png")} alt="Third slide"/>
                            </div>
                        </div>

                {/** Left and Right Controls */}
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
                <Boxes />
            </section>
        );
    }
}
export default Home;