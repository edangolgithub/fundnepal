import React, { Component } from 'react'
import axios from 'axios';
import * as fun from './ApiFunctions'
import { x } from "./Province"


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
      },
      districts: x.Bagmati,
      selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.addAccount = this.addAccount.bind(this);
    this.handleprovincechange = this.handleprovincechange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.onFileUpload = this.onFileUpload.bind(this)
  }
  // On file select (from the pop up)
  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
    console.log(this.state.selectedFile);
  };

  // On file upload (click the upload button)
  onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("/upload", formData);
  };

  handleprovincechange(event) {

    // this.setState({ districts: [] });
    switch (event.target.value) {
      case "Province1":
        this.setState({ districts: x.Province1 });
        break;
      case "Province2":
        this.setState({ districts: x.Province2 });
        break;
      case "Bagmati":
        this.setState({ districts: x.Bagmati });
        break;
      case "Gandaki Province":
        this.setState({ districts: x['Gandaki Province'] });
        break;
      case "Province5":
        this.setState({ districts: x.Province5 });
        break;
      case "Karnali Province":
        this.setState({ districts: x['Karnali Province'] });
        break;
      case "Sudurpaschim Province":
        this.setState({ districts: x['Sudurpaschim Province'] });
        break;

    }

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
    //console.log(selectedFile)

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
            <label htmlFor="phone">upload</label>
            <input type="file" name="upload" onChange={this.onFileChange} className="form-control" id="upload" placeholder="upload" />
            <input type="button" onClick={this.onFileUpload} value="upload" className="btn btn-primary" />
          </div>
          <div className="form-group">
            <label htmlFor="accountnumber">Account Number</label>
            <input type="text" name="accountid" onChange={this.handleChange} className="form-control" id="accountnumber" placeholder="Account Number" />
            {errors.accountid.length > 0 &&
              <span className='error'>{errors.accountid}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Account Name</label>
            <input type="text" name="firstname" onChange={this.handleChange} className="form-control" id="nomineefirstname" placeholder="First Name" />
            <input type="text" name="middlename" onChange={this.handleChange} className="form-control" id="nomineemiddlename" placeholder="Middle Name" />
            <input type="text" name="lastname" onChange={this.handleChange} className="form-control" id="nomineelastname" placeholder="Last Name" />
            <input type="text" name="citizennumber" onChange={this.handleChange} className="form-control" id="nomineecitizennumber" placeholder="Citizenship Number" />

            <input type="text" name="accountname" onChange={this.handleChange} className="form-control" id="accountname" placeholder="Account Name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" onChange={this.handleChange} className="form-control" id="phone" placeholder="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile</label>
            <input type="text" name="mobile" onChange={this.handleChange} className="form-control" id="phone" placeholder="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Address</label>
            <input type="text" name="addressline1" onChange={this.handleChange} className="form-control" id="address1" placeholder="Line 1" />
            <input type="text" name="addressline2" onChange={this.handleChange} className="form-control" id="address2" placeholder="Line 2" />
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Province</label>
            <select onChange={this.handleprovincechange}>
              {
                Object.keys(x).map((ac, k) =>
                  <option value={ac} key={k}>{ac}</option>
                )
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="accountname">District</label>
            <select onChange={this.handleprovincechange}>
              {
                this.state.districts.map((ac, k) =>
                  <option value={ac} key={k}>{ac}</option>
                )
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="accountname">City</label>
            <input type="city" name="city" onChange={this.handleChange} className="form-control" id="city" placeholder="City" />
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Tole</label>
            <input type="tole" name="tole" onChange={this.handleChange} className="form-control" id="tole" placeholder="Tole" />
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Country</label>
            <input type="country" name="country" onChange={this.handleChange} className="form-control" id="email" placeholder="Country" />
          </div>
          <div className="form-group">
            <label htmlFor="accountname">Email</label>
            <input type="email" name="email" onChange={this.handleChange} className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="Principle">Father's Name</label>
            <input type="text" name="fathername" onChange={this.handleChange} className="form-control" id="fathername" placeholder="Father's Name" />
          </div>
          <div className="form-group">
            <label htmlFor="Principle">Mother's Name</label>
            <input type="text" name="mothername" onChange={this.handleChange} className="form-control" id="mothername" placeholder="Father's Name" />
          </div>
          <div className="form-group">
            <label htmlFor="Principle">Nominiee</label>
            <select>
              <option>Husband</option>
              <option>Wife</option>
              <option>Father</option>
              <option>Mother</option>
              <option>Brother</option>
              <option>Son</option>
              <option>daughter</option>
              <option>Cousin</option>
            </select>
            <input type="text" name="nomineefirstname" onChange={this.handleChange} className="form-control" id="nomineefirstname" placeholder="First Name" />
            <input type="text" name="nomineemiddlename" onChange={this.handleChange} className="form-control" id="nomineemiddlename" placeholder="Middle Name" />
            <input type="text" name="nomineelastname" onChange={this.handleChange} className="form-control" id="nomineelastname" placeholder="Last Name" />
            <input type="text" name="nomineecitizennumber" onChange={this.handleChange} className="form-control" id="nomineecitizennumber" placeholder="Citizenship Number" />

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
