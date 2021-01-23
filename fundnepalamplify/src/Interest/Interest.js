import React, { Component } from 'react'
import AccountList from "./AccountList"
import SelectedAccount from "./SelectedAccount";
import Transaction from "./Transactions";
import * as fun1 from './ApiFunctions'
import * as fun from './Calculation'
import Iform from "./IForm";
export class Interestmain extends Component {
    state = {
        accounts: [],
        accountids: [],
        selectedaccount: [],
        selectedaccounttype: [],
        transactions: [],
        accounttypes: [],
        selectedtransaction: [],
        total: 0
    };

    componentDidMount() {

        const actypes = fun1.getaccounttypes()
        actypes.then((res) => {
            this.setState({ accounttypes: res.data })
        })

        const acs = fun1.getaccounts()
        acs.then((res) => {
            this.setState({ accounts: res.data })
        })
            .then(() => {
                this.setState({
                    accountids: this.state.accounts.map(x => x.accountid)
                })
            })

        const tras = fun1.gettransactions()
        tras.then((res) => {
            this.setState({ transactions: res.data })
        })



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
        const data = fun1.gettransactions()
        data.then(res => {
            const d = res.data;
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
    constructor(props) {
        super(props);
        this.onhandleaccountchange = this.onhandleaccountchange.bind(this)
        this.onhandletypechange = this.onhandletypechange.bind(this)
        this.onselectaccount = this.onselectaccount.bind(this)
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
                            {
                                (this.state.accounttypes && this.state.accountids) &&

                                <AccountList onhandletypechange={this.onhandletypechange} onhandleaccountchange={this.onhandleaccountchange} accountids={this.state.accountids} accounttypes={this.state.accounttypes} />
                            }
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
