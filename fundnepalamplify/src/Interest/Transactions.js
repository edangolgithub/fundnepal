import React, { Component } from 'react'
export class Transactions extends Component {
  render() {
    var data = this.props.data;
    return (
      <div>
        { data &&
          <div className="table-responsive">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Type</th>
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
