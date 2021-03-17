import React, { Component } from 'react'
import * as fun from './ApiFunctions'
import FormErrors from './FormErrors'
export class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      d: [],
      formErrors: [{ email: '', password: '',accountid:'' }],
      emailValid: false,
      passwordValid: false,
      accountidvalid:false,
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.addAccount = this.addAccount.bind(this);
  }

  handleChange(evt) {
    var fname = evt.target.name;
    var fvalue = evt.target.value;
    this.validateField(fname,fvalue);
    var d = {
      ...this.state.data,
      [fname]: fvalue
    };
    this.setState({ data: d })
  }
  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.accountidvalid });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let accountidvalid=this.state.accountidvalid;
    switch (fieldName) {
      case 'accountid':
        if(value.length<1)
        fieldValidationErrors.accountid = accountidvalid ? '' : ' is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }
  addAccount(event) {
    event.preventDefault();
    fun.postnewaccount(this.state.data)

  }

  render() {
    return (
      <div className="container jumbotron m-5">
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <form onSubmit={this.addAccount}>
          <div className="form-group">
            <label htmlFor="accountnumber">Account Number</label>
            <input type="text" name="accountid" onChange={this.handleChange} className="form-control" id="accountnumber" placeholder="Account Number" />

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
                <input name="accounttypeid" checked id="actype_0" type="radio" className="custom-control-input" defaultValue={1} />
                <label htmlFor="actype_0" className="custom-control-label">Daily</label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input name="accounttypeid" id="actype_1" type="radio" className="custom-control-input" defaultValue={2} />
                <label htmlFor="actype_1" className="custom-control-label">Monthly</label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input name="accounttypeid" id="actype_2" type="radio" className="custom-control-input" defaultValue={3} />
                <label htmlFor="actype_2" className="custom-control-label">Fixed</label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline">
                <input name="accounttypeid" id="actype_3" type="radio" className="custom-control-input" defaultValue={4} />
                <label htmlFor="actype_3" className="custom-control-label">Swoniga</label>
              </div>
            </div>
          </div>

          <input type="submit" disabled={!this.state.formvalid} value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default NewAccount
