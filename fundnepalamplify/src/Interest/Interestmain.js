import React, { Component } from 'react'
import axios from 'axios'
import AccountList from "./AccountList"
import SelectedAccount from "./SelectedAccount";
import Transaction from "./Transactions";
import * as fun from './Calculation'
import Iform from "./IForm";
import Loader from '../components/Loader'
import BLoader from '../Loaders/Beat'
export class Interestmain extends Component {
    state = {
        accounts: [],
        accountids: [],
        selectedaccount: [],
        selectedaccounttype: [],
        transaction: [],
        accounttypes: [],
        selectedtransaction: [],
        total: 0, loading: false,pageloading:true
    };
   async getaccounts() {
    this.setState({pageloading:true});
      await  axios.get('http://localhost:3333/accounts')
            .then(data => {
                const d = data.data;
                // console.log(d);
                // console.log(data)
                this.setState({ accounts: d })
                this.setState({ accountids: d.map(x => x.accountid) })
                //console.log(this.state.accountids)
                this.setState({pageloading:false});
            })
    }
   async getaccounttypes() {
    this.setState({pageloading:true});
      await  axios.get('http://localhost:3333/accounttypes')
            .then(data => {
                const d = data.data;
                this.setState({ accounttypes: d })
                this.setState({pageloading:false});
            })
    }
    gettransactions() {
        this.setState({ loading: true });
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
                        this.setState({ loading: false })
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
            .then(() => {
                alert("success");
                this.gettransactions();

            })
    }
    componentDidMount() {
       
        this.getaccounts();
        this.getaccounttypes();

    }
    onhandleaccountchange(acid) {
        var selectedaccount = this.state.accounts.find(a => a.accountid === acid);
        this.setState({ selectedaccount: selectedaccount })

    }

    onhandletypechange(actype) {
        var selectedaccounttype = this.state.accounttypes.find(a => a.accounttypeid === actype);
        this.setState({ selectedaccounttype: selectedaccounttype })
        this.setState({ selectedtransaction: [], total: 0 })
    }
    onselectaccount() {
       
    if(this.state.selectedaccount.length<1 ||this.state.selectedaccounttype.length<1)
    {
        alert("select account");
        return;
    }
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
                { this.state.pageloading? <BLoader />:
                <div className="container-fluid">
                    <div className="row">
                        <div className="col d-flex">
                            <form className="form-inline">
                                <AccountList onhandletypechange={this.onhandletypechange} onhandleaccountchange={this.onhandleaccountchange} accountids={this.state.accountids} accounttypes={this.state.accounttypes} />
                                <button type="submit" onClick={this.onselectaccount} className="btn btn-primary">
                                    {this.state.loading ? <Loader style={{ textAlign: "center" }} /> : "Get Info"}
                                </button>

                            </form>
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
               }
            </div>
        )
    }
}

export default Interestmain
