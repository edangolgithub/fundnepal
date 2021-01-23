import React, { Component } from 'react'

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
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Amount</label>
            <input type="text" name="email" onChange={this.amountchange} className="form-control" id="email" placeholder="Enter Amount" />
          </div>
          <button type="submit" onClick={this.formclick} className="btn btn-primary mb-2">
            Add
          </button>
        </form>
      </div>

    )
  }
}

export default Iform
