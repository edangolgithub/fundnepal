import React, { Component } from 'react'

export class AccountList extends Component {
    constructor() {
        super();
        this.handleaccountchange = this.handleaccountchange.bind(this);
        this.handletypechange = this.handletypechange.bind(this);
  
    }
    handleaccountchange(event) {
        if(event.target.value==="-9")
        {
            alert(event.target.value);
            return;
        }
        this.props.onhandleaccountchange(event.target.value);
    }
    handletypechange(event)
    {
        if(event.target.value==="-9")
        {
            alert(event.target.value);
            return;
        }
        this.props.onhandletypechange(event.target.value);
    }
    
    render() {
        return (
                    <div className="form-inline combodiv">                       
                        <select className="form-control m-2" onChange={this.handleaccountchange}>
                            <option value="-9">Account</option>
                            {
                                this.props.accountids.map((ac, k) =>
                                    <option value={ac} key={k}>{ac}</option>
                                )
                            }
                        </select>
                        <select className="form-control m-2" onChange={this.handletypechange} >
                            <option value="-9">Account Type</option>
                            { this.props.accounttypes.map &&
                                this.props.accounttypes.map((ac, k) =>
                                    <option value={ac.accounttypeid} key={k}>{ac.accounttype}</option>
                                )
                            }
                        </select>
                      
                    </div>
              
        )
    }
}

export default AccountList
