import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Loader from './Loader'
import NgoTable from "./sub/Ngotable"
import "./style.css"
export class NgoApi extends Component {
    constructor() {
        super();        
        this.callngoservice = this.callngoservice.bind(this);
    }
    state = {
        Organizations: [], loading: false
    }
    callngoservice() {        
        this.setState({ loading: true })      
        fetch('https://87zrtm8j9a.execute-api.us-east-1.amazonaws.com/Prod/api/project')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        Organizations: result,
                        loading: false,                       
                    });                    
                })
                .catch(error => {
                   alert(error);
                   this.setState({ loading: false })      
                })

    }
    render() {
        return (
            <div className="btndiv">
                 <Button onClick={this.callngoservice} style={{ textAlign: "left", display: "inline-block",fontSize:"12px",  width: "215px", height: "65px" }} variant="success">
                    {this.state.loading ? <Loader style={{ textAlign: "center" }} /> : "Organizations"}
                </Button>{' '}
        
                {this.state.loading? null:<NgoTable ngodata={this.state.Organizations} />}

            </div>
        )
    }
}


export default NgoApi
