import React, { Component } from 'react'
import axios from 'axios'
import AccountList from "./AccountList"
import SelectedAccount from "./SelectedAccount";
import Transaction from "./Transactions";
import * as fun from './Calculation'
import Iform from "./IForm";
export class Interestmain extends Component {
    state = {
        accounts: [],
        accountids: [],
        selectedaccount: [],
        selectedaccounttype: [],
        transaction: [],
        accounttypes: [],
        selectedtransaction: [],
        total: 0
    };
    getaccounts() {
        axios.get('http://localhost:3333/accounts')
            .then(data => {
                const d = data.data;
                // console.log(d);
                // console.log(data)
                this.setState({ accounts: d })
                this.setState({ accountids: d.map(x => x.accountid) })
                //console.log(this.state.accountids)
            })
    }
    getaccounttypes() {
        axios.get('http://localhost:3333/accounttypes')
            .then(data => {
                const d = data.data;
                this.setState({ accounttypes: d })
            })
    }
    gettransactions() {
        axios.get('http://localhost:3333/transaction')
            .then(data => {
                const d = data.data;
                this.setState({ transaction: d }, function () {
                    this.setState({
                        selectedtransaction: this.state.transaction
                            .filter(x => x.accounttypeid === this.state
                                .selectedaccounttype.accounttypeid &&
                                x.accountid === this.state.selectedaccount
                                    .accountid)
                    }, function () {
                        let res = fun.CalculateTotal(this.state.selectedtransaction)
                        this.setState({ total: res })
                        console.log(res)
                    })
                })
            })

    }
    postaccounts(data) {
        axios.post('http://localhost:3333/accounts', data)
    }
    posttransaction(amount) {
        if (this.state.selectedaccount.length < 1) {
            console.log(this.state.selectedaccount)
            alert("no account selected")
            return
        }
        var d = new Date().toDateString();
        axios.post('http://localhost:3333/transaction', {
            accountid: this.state.selectedaccount.accountid,
            date: d,
            accounttypeid: this.state.selectedaccounttype.accounttypeid,
            amount: amount,
            type: "cash",
            entry: "debit"
        })
            .then(() => alert("success"))
    }
    componentDidMount() {
        this.getaccounts();
        this.getaccounttypes(); 
    }
    onhandleaccountchange(acid) {
        var selectedaccount = this.state.accounts.find(a => a.accountid === acid);
        this.setState({ selectedaccount: selectedaccount })
        //console.log(this.state.selectedaccount)
    }

    onhandletypechange(actype) {
        var selectedaccounttype = this.state.accounttypes.find(a => a.accounttypeid === actype);
        this.setState({ selectedaccounttype: selectedaccounttype })
    }
    onselectaccount() {
        
        this.gettransactions();
    }
    constructor(props) {
        super(props);
        this.onhandleaccountchange = this.onhandleaccountchange.bind(this)
        this.onhandletypechange = this.onhandletypechange.bind(this)
        this.onselectaccount = this.onselectaccount.bind(this)
        // this.gettransactions=this.gettransactions.bind(this)
        // this.getaccounts=this.getaccounts.bind(this)
        // this.getaccounttypes=this.getaccounttypes.bind(this)
        this.formclick = this.formclick.bind(this)
    }
    formclick(amount) {
        var amt = Number(amount);
        this.posttransaction(amt);
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                        <button type="button" onClick={this.onselectaccount} className=" mt-2 float-right btn btn-primary">View</button>

                            <AccountList onhandletypechange={this.onhandletypechange} onhandleaccountchange={this.onhandleaccountchange} accountids={this.state.accountids} accounttypes={this.state.accounttypes} />
                        </div>

                    </div>
                    <hr />
                    {
                        this.state.selectedaccount &&
                        <div className="row">
                            <div className="col-2">
                                <SelectedAccount data={this.state.selectedaccount} />
                            </div>
                            <div className="col-10" >
                                <Transaction total={this.state.total} data={this.state.selectedtransaction} />
                                <Iform formclick={this.formclick} />
                            </div>
                        </div>
                    }


                </div>
            </div>
        )
    }
}

export default Interestmain
