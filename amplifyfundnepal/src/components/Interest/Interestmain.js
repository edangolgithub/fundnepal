import React, { Component } from 'react'
import axios from 'axios'
import AccountList from "./AccountList"
//import SelectedAccount from "./SelectedAccount";
import Transaction from "./Transactions";
import * as fun from './Calculation'
import Iform from "./IForm";
import Loader from '../../Loaders/Loader'
import BLoader from '../../Loaders/Beat'
export class Interestmain extends Component {
    state = {
        accounts: [],
        accountids: [],
        selectedaccount: "",
        selectedaccounttype: "",
        transaction: [],
        accounttypes: [],
        selectedtransaction: [],
        loading: false, pageloading: true,
        transactionloading: false,

    };

    gettransactions() {
        this.setState({ pageloading: true });
        axios.get('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/transaction')
            .then(data => {
                //console.log(data.data)
                const ids = [...new Set(data.data.map(x => x.accountid))];
                const atypes = [...new Set(data.data.map(x => x.accounttypeid))];
                this.setState({ accountids: ids })
                this.setState({ accounttypes: atypes })
                this.setState({ transaction: data.data })
                this.setState({ pageloading: false })

                //  console.log(atypes)

            })
    }
    getselectedtransactions() {
        //  console.log(this.state.transaction)
        var st = this.state.transaction.filter(a => a.accountid === this.state.selectedaccount
            && a.accounttypeid === this.state.selectedaccounttype)
        //        console.log(st)
        this.setState({ selectedtransaction: st })
    }

    posttransaction(amt) {
        if(!this.state.selectedtransaction[0].hasOwnProperty('created')
        || !this.state.selectedtransaction[0].hasOwnProperty('amount')
        || !this.state.selectedtransaction[0].hasOwnProperty('balance')
        || !this.state.selectedtransaction[0].hasOwnProperty('interest')
        || !this.state.selectedtransaction[0].hasOwnProperty('id')
        || !this.state.selectedaccount
        )
        {
            alert("error");
            return;
        }
      //  console.log(this.state.selectedtransaction[0])
       
      this.setState({ transactionloading: true })
        if (this.state.selectedaccount.length < 1) {
            console.log(this.state.selectedaccount)
            alert("no account selected")
            this.setState({ transactionloading: false })
            return;
        }
        var d = new Date().toISOString();
        var bal = 0;
        bal = this.state.selectedtransaction[0].balance;
        var balance=bal+amt;
        //var balance = (bal + amt).toFixed(2);

        // console.log(this.state.selectedaccount);
        // console.log(this.state.selectedtransaction[0].balance);   
        // console.log(this.state.selectedaccount)
        // console.log(this.state.selectedaccounttype)
        // console.log(amt)
        // console.log(fun.resolveaccounttype(this.state.selectedaccounttype))
        // console.log(d)
        // console.log(balance)
        // console.log(this.state.selectedtransaction[0].accountname)        


        axios.post('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/transaction', {
            accountid: this.state.selectedaccount,
            created: d,
            accounttypeid: this.state.selectedaccounttype,
            accounttype: fun.resolveaccounttype(this.state.selectedaccounttype),
            amount: amt,
            type: "cash",
            entry: "debit",
            balance: balance,
            islatest: "1",
            interest: 0,
            accountname: this.state.selectedtransaction[0].accountname
        })
            .then(() => {
             
                axios.put('https://nxopo5t28l.execute-api.us-east-1.amazonaws.com/Prod/api/transaction', {
                    accountid: this.state.selectedaccount,
                    created: this.state.selectedtransaction[0].created,
                    islatest: "0",
                    id:this.state.selectedtransaction[0].id,
                    accounttypeid: this.state.selectedtransaction[0].accounttypeid,
                    accounttype: this.state.selectedtransaction[0].accounttype,
                    amount: this.state.selectedtransaction[0].amount,
                    type: this.state.selectedtransaction[0].type,
                    entry: this.state.selectedtransaction[0].entry,
                    balance: this.state.selectedtransaction[0].balance,
                    cinterest: this.state.selectedtransaction[0].interest,
                    accountname: this.state.selectedtransaction[0].accountname
                })
                this.setState({ transactionloading: false })
            })
            .then(()=>{
                this.setState({selectedtransaction:[]})
                this.setState({transaction:[]})
                this.setState({selectedaccount:""})
                this.setState({selectedaccounttype:""})
                alert("transction completed")
            })
    }
    componentDidMount() {

        this.gettransactions();
    }
    onhandleaccountchange(acid) {
        this.setState({ selectedtransaction: [] })
        if (acid === "-9") {
            this.setState({ selectedaccount: "" });
            return;
        }
        this.setState({ selectedaccount: acid })
    }

    onhandletypechange(actype) {
        this.setState({ selectedtransaction: [], total: 0 })
        if (actype === "-9") {
            this.setState({ selectedaccounttype: "" });
            return;
        }
        this.setState({ selectedaccounttype: actype })

    }
    onselectaccount(event) {
        event.preventDefault();
        if (this.state.selectedaccount.length < 1 || this.state.selectedaccounttype.length < 1) {
            alert("select account");
            return;
        }
        this.getselectedtransactions();
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
        this.onrefresh = this.onrefresh.bind(this);
    }
    onrefresh() {
        this.gettransactions();
        //   this.getselectedtransactions();
        this.setState({ selectedtransaction: [] });
    }
    formclick(amount) {

        if (!amount) {
            alert("0 is not valid money");
        }
        else {
            if (!parseFloat(amount)) {
                alert(amount + " is not valid amount");
            }
            var amt = parseFloat(amount);
            this.posttransaction(amt);
        }

    }
    componentDidUpdate() {
        //  console.log(this.state.result)  
    }
    render() {
        return (
            <div style={{minHeight:"500px"}}>
                { this.state.pageloading ? <BLoader /> :
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col d-flex">
                                <form className="form-inline">
                                    <AccountList onhandletypechange={this.onhandletypechange} onhandleaccountchange={this.onhandleaccountchange} accountids={this.state.accountids} accounttypes={this.state.accounttypes} />
                                    <button type="submit" onClick={this.onselectaccount} className="btn btn-primary" disabled={(this.state.selectedaccount.length < 1 || this.state.selectedaccounttype.length < 1)}>
                                        {this.state.loading ? <Loader style={{ textAlign: "center" }} /> : "Get Info"}
                                    </button>
                                    <button style={{ marginLeft: "50px" }} type="submit" onClick={this.onrefresh} className="btn btn-primary" disabled={(this.state.selectedaccount.length < 1 || this.state.selectedaccounttype.length < 1)}>
                                        Refresh
                                    </button>

                                </form>
                            </div>

                        </div>
                        <hr />
                        {
                            this.state.selectedaccount &&
                            <div className="row">
                                {/* <div className="col-2">
                                    <SelectedAccount data={this.state.selectedaccount} />
                                </div> */}
                                <div className="col-12" >
                                    <Transaction total={this.state.total} data={this.state.selectedtransaction} />
                                    <Iform data={this.state} formclick={this.formclick} />
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
