import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
export class Transactions extends Component {
  state={
    startDate: new Date()
  }
  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
  constructor()
  {
    super();
    this.handleChange=this.handleChange.bind(this)
  }
  render() {
    var data = this.props.data;
    return (
      <div>
 <DatePicker  selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"      />
        { data &&
          <div className="table-responsive trantable">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Type</th>
                  <th scope="col">Amount</th>                 
                </tr>
              </thead>
              <tbody>
                {
                  data.map((t, k) =>
                    <tr key={k}>
                      <td>{t.date}</td>
                      <td>{t.type}</td>
                      <td>{t.amount}</td>
                    </tr>
                  )
                }
                <tr>
                  <td></td>
                  <td style={{textAlign:"right",fontWeight:"bolder",color:"red"}}>Total </td>
                  <th style={{color:"red"}}>{this.props.total}</th>    
                </tr>
              </tbody>
            </table>

          </div>

        }
      </div>
    )
  }
}

export default Transactions
