import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap';
//import Loader from '../../Loaders/Loader'
import Tables from './Tables'
import Ngotable from './Ngotable'
export class GlobalGivings extends Component {
    state = {
        projects: [], loading: false, stringdata: '',
        projects1: [], loading1: false, stringdata1: '',
        ngoprojects: [], ngoloading: false, ngostringdata: '',
        select: 0
    }
    callngoservice() {
        this.setState({ select: 1 })
        this.setState({ ngoloading: true })
        fetch('https://87zrtm8j9a.execute-api.us-east-1.amazonaws.com/Prod/api/Projects')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        ngoprojects: result,
                        ngoloading: false,
                        projects1: []
                    });
                })
            .catch(error => {
                alert(error);
            })

    }
    callapi() {
        this.setState({ select: 2 })
        this.setState({ loading1: true })
        fetch('https://www.humanitarianresponse.info/api/v1.0/assessments')
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result.data);
                    this.setState({
                        projects1: result.data,
                        loading1: false,
                        ngoprojects: []
                    });
                    // var x = JSON.stringify(this.state.projects);
                    // this.setState({ stringdata: x });
                    // console.log(this.state.stringdata)
                })
    }
    callapi1() {
        this.setState({ select: 3 })
        this.setState({ loading: true })
        fetch('https://api.globalgiving.org/api/public/projectservice/all/projects?api_key=bf80e61a-b1a3-48f5-92cb-3acd81c7e314')
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result);
                    this.setState({

                        projects: result.data,
                        loading: false,
                    });
                   
                })
            .catch(error => {
               console.log(error)
                this.setState({
                    loading: false,
                });
                throw error;
            })

    }
    constructor() {
        super();
        this.callapi = this.callapi.bind(this);
        this.callapi1 = this.callapi1.bind(this);
        this.callngoservice = this.callngoservice.bind(this);
    }
    // renderSwitch() {
    // if(ngoloading==false)
    // {
    //     return <Ngotable ngodata={this.state.ngoprojects} />;
    // }
    // else if()
    // }
    render() {

        return (
            <div className="btnapidiv">
                <Button onClick={this.callapi} variant="success">
                    {this.state.loading1 ? 
                    <span>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />{'           '}<span>Loading...</span>
                    </span>
                        : "Call other Api"}
                </Button>{' '}
                <Button onClick={this.callapi1} variant="success">
                    {this.state.loading ? 
                    <span>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /><span>Loading...</span>
                </span>
                    : "Call Global Giving Api"}
                </Button>{' '}
                <Button onClick={this.callngoservice} variant="success">
                    {this.state.ngoloading ? 
                    <span>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /><span>Loading...</span>
                </span>
                    : "Call our Api"}
                </Button>{' '}

                {this.state.ngoloading ? null : <Ngotable ngodata={this.state.ngoprojects} />}
                {this.state.loading1 ? null : <Tables kdata={this.state.projects1} />}
            </div>
        )
    }
}


export default GlobalGivings
