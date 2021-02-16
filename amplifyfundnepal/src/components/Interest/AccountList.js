import React, { Component } from 'react'

export class AccountList extends Component {
    constructor() {
        super();
        this.handleaccountchange = this.handleaccountchange.bind(this);
        this.handletypechange = this.handletypechange.bind(this);
    
    }
    handleaccountchange(event) {
        this.props.onhandleaccountchange(event.target.value);
    }
    handletypechange(event) {
        this.props.onhandletypechange(event.target.value);
    }

    render() {
        return (
            <div className="form-inline combodiv">
                <select className="form-control m-2"  onChange={this.handleaccountchange}>
                    <option value="-9">Account</option>
                    {
                        this.props.accountids.map((ac, k) =>
                            <option value={ac} key={k}>{ac}</option>
                        )
                    }
                </select>
                <select className="form-control m-2" onChange={this.handletypechange} >
                    <option value="-9">Account Type</option>
                    {/* {

                        this.props.accounttypes &&
                        this.props.accounttypes.forEach((element) => {
                            var str=  this.abc(element);
                            console.log(element);                           
                            console.log(str);
                            <option value={element}>{element}</option>
                        })                       
                       
                    } */}

                    <option value="1">Daily</option>
                    <option value="2">Monthly</option>
                    <option value="3">Fixed</option>
                    <option value="4">Swoniga</option>
                </select>

            </div>

        )
    }
}

export default AccountList
