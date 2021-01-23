import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Loader from './Loader'
import Apitable from './Apitable'
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import Amplify  from 'aws-amplify';
// import awsconfig from '../aws-exports';
// Amplify.configure(awsconfig);

class LambdaApi extends Component {
    constructor() {
        super();
        this.callapi = this.callapi.bind(this)
    }
    state = {
        items: [], loading: false
    }

    callapi() {
        this.setState({ loading: true })
        fetch('https://facj4p3t6k.execute-api.us-east-1.amazonaws.com/Prod')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({

                        items: result,
                        loading: false
                    });
                })

    }
    render() {
        const tablestyle={
            fontSize:"12px",
            maxWidth:"400px",
            textAlign:"left",
            border:'1px outset brown'
        }
        return (
            <div>
                <div className="container">              
                    <table style={tablestyle} className="table table-dark table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Token</th>
                                <th scope="col">Access</th>
                            </tr>
                        </thead>
                       
                            {this.state.loading ? null : <Apitable results={this.state.items} />}
                       
                    </table>
                    <Button onClick={this.callapi} style={{textAlign:"left",display:"block",width:"215px",height:"65px"}} variant="success">
                    {this.state.loading ? <Loader style={{textAlign:"center"}} />:"Call Api" }
                        </Button>{' '}
                </div>
            </div>
        )
    }
}

export default LambdaApi;
