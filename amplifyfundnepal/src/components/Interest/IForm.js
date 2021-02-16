import React, { Component } from 'react'
import Loader from '../../Loaders/Loader'
export class Iform extends Component {
  state = {
    amount: 0
   
  }
  formclick(event) {
    event.preventDefault();
    this.props.formclick(this.state.amount);
  }
  amountchange(event) {
    this.setState({ amount: event.target.value },
      () => { console.log(this.state.amount) })

  }
  constructor() {
    super();
    this.formclick = this.formclick.bind(this)
    this.amountchange = this.amountchange.bind(this)
  }

  render() {
    return (
      <div className="fuy">
        <form >
          <div className="form-group">
            <label htmlFor="email fuy">Amount</label>
            <input type="text" name="email" onChange={this.amountchange} className="form-control" id="email" placeholder="Enter Amount" />
          </div>
          <button disabled={(this.props.data.selectedaccount.length < 1 || this.props.data.selectedaccounttype.length < 1)}
            type="submit" onClick={this.formclick} className="btn btn-primary mb-2">
            {this.props.data.transactionloading ?
              <Loader style={{ textAlign: "center" }} /> : "Add"
            }
          </button>
        </form>
      </div>
    )
  }
}

export default Iform
