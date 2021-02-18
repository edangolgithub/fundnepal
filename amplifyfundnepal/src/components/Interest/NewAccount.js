import React, { Component } from 'react'

export class NewAccount extends Component {
  constructor(props) {
    super(props);
   this.state={
     data:[],
     d:[]
   }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
  //  this.setState({ value: event.target.value });
  //console.log( evt.target.name)
  //console.log(evt.target.value)
  var fname=evt.target.name;
  var fvalue=evt.target.value;
;
  var d = {
    ...this.state.data,
    [fname]:fvalue
  };
  this.setState({data:d})
  }

  handleSubmit(event) {    
    console.log(this.state.data)
    event.preventDefault();
  }

  render() {
    return (
      <div className="container jumbotron m-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="accountnumber">Account Number</label>
            <input type="text" name="accountnumber" onChange={this.handleChange} className="form-control" id="accountnumber" placeholder="Account Number" />

          </div>
          <div className="form-group">
            <label htmlFor="accountname">Account Name</label>
            <input type="text" name="accountname" onChange={this.handleChange} className="form-control" id="accountname" placeholder="Account Name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" onChange={this.handleChange} className="form-control" id="phone" placeholder="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Address</label>
            <input type="text" name="address" onChange={this.handleChange} className="form-control" id="address" placeholder="address" />
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Email</label>
            <input type="email" name="email" onChange={this.handleChange} className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="Principle">Principle</label>
            <input type="text" name="amount" onChange={this.handleChange} className="form-control" id="Principle" placeholder="Principle" />
          </div>
          <div className="form-group row">
            <label className="col-4">Account Type</label>
            <div className="col-8" onChange={this.handleChange}>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input name="accounttype" id="actype_0" type="radio" className="custom-control-input" defaultValue={1} />
                <label htmlFor="actype_0" className="custom-control-label">Daily</label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input name="accounttype" id="actype_1" type="radio" className="custom-control-input" defaultValue={2} />
                <label htmlFor="actype_1" className="custom-control-label">Monthly</label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input name="accounttype" id="actype_2" type="radio" className="custom-control-input" defaultValue={3} />
                <label htmlFor="actype_2" className="custom-control-label">Fixed</label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input name="accounttype" id="actype_3" type="radio" className="custom-control-input" defaultValue={4} />
                <label htmlFor="actype_3" className="custom-control-label">Swoniga</label>
              </div>
            </div>
          </div>

          <input type="submit"  value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default NewAccount
