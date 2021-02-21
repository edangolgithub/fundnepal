import React, { Component } from 'react'
import * as fun from './ApiFunctions'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      d: [],
      errors: {
        accountid: '',
        email: '',
        password: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.addAccount = this.addAccount.bind(this);
  }

  handleChange(evt) {
    var fname = evt.target.name;
    var fvalue = evt.target.value;
    let errors = this.state.errors;

    switch (fname) {
      case 'accountid':
        errors.accountid =
          fvalue.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'emailqq':
        errors.email =
          validEmailRegex.test(fvalue)
            ? ''
            : 'Email is not valid!';
        break;
      case 'passwordqq':
        errors.password =
          fvalue.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [fname]: fvalue });

    var d = {
      ...this.state.data,
      [fname]: fvalue
    };
    this.setState({ data: d })
  }

  addAccount(event) {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      alert('Valid Form')
      return
      fun.postnewaccount(this.state.data)
    } else {
      alert('Invalid Form')
    }


  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container jumbotron m-5">
        <form onSubmit={this.addAccount}>
          <div className="form-group">
            <label htmlFor="accountnumber">Account Number</label>
            <input type="text" name="accountid" onChange={this.handleChange} className="form-control" id="accountnumber" placeholder="Account Number" />
            {errors.accountid.length > 0 &&
              <span className='error'>{errors.accountid}</span>}
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
                <input name="accounttypeid" defaultChecked id="actype_0" type="radio" className="custom-control-input" defaultValue={1} />
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

          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default NewAccount
