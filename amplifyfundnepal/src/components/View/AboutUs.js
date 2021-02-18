import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

// import  Eauth  from "../Authentication/Eauth";
class AboutUs extends Component
{
    handleClick() {       
        this.props.history.push("/");
}
constructor(props) {

    super(props);
    this.handleClick=this.handleClick.bind(this);
}
render() {
    return (
        <div>
            {/* <Eauth className="a" /> */}
            <h1>this is about us page</h1>
            <button type="button" onClick={this.handleClick}>
                Go home
    </button>
        </div>
    )
}
}

export default withRouter(AboutUs)
