import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
//import { Type } from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import DatePicker from 'react-date-picker';
export class Transactions extends Component {
  state = {
    startDate: new Date(),
    columns: [{
      dataField: 'accountid',
      text: 'Account'
    },
    {
      dataField: 'created',
      text: 'Date',
      formatter: (cell) => {
        let dateObj = cell;
       
        return dateObj.substring(0,19);
      },
      sort: true
    }, {
      dataField: 'amount',
      text: 'Transaction',
      sort: true
    },
    {
      dataField: 'interest',
      text: 'Interest',
      sort: true
    },
    {
      dataField: 'balance',
      text: 'Balance',
      sort: true
    }
      // ,
      // {
      //   dataField: 'ContactNum',
      //   text: 'ContactNum',
      //   sort: true
      // },
      // {
      //   dataField: 'Salary',
      //   text: 'Salary',
      //   sort: true
      // },
      // {
      //   dataField: 'Department',
      //   text: 'Department',
      //   sort: true
      // }
    ]
  }
  handleChange(date) {
    this.setState({
      startDate: date
    })
  }
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    var data = this.props.data;

    // const options = {
    //   page: 2,
    //   sizePerPageList: [{
    //     text: '5', value: 5
    //   }, {
    //     text: '10', value: 10
    //   }, {
    //     text: 'All', value: data.length
    //   }],
    //   sizePerPage: 5,
    //   pageStartIndex: 0,
    //   paginationSize: 3,
    //   prePage: 'Prev',
    //   nextPage: 'Next',
    //   firstPage: 'First',
    //   lastPage: 'Last',
    // };
    return (
      <div>
        {/* <DatePicker  selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"      /> */}
        { data &&
          // <div className="table-responsive trantable">
          //   <table className="table table-hover">
          //     <thead>
          //       <tr>
          //         <th scope="col">Date</th>
          //         <th scope="col">Type</th>
          //         <th scope="col">Entry</th>
          //         <th scope="col">Transaction</th>
          //         <th scope="col">Interest</th>
          //         <th scope="col">Balance</th>
          //       </tr>
          //     </thead>
          //     <tbody>
          //       {
          //         data.map((t, k) =>
          //           <tr key={k}>
          //             <td>{t.created.substring(0, 10)}</td>
          //             <td>{t.type}</td>
          //             <td>{t.entry}</td>
          //             <td>{t.amount}</td>
          //             <td>{t.interest}</td>
          //             <td>{t.balance}</td>
          //           </tr>
          //         )
          //       }
          //       <tr>
          //         <td></td>
          //         <td style={{ textAlign: "right", fontWeight: "bolder", color: "red" }}>Total </td>
          //         <th style={{ color: "red" }}>{this.props.total}</th>
          //       </tr>
          //     </tbody>
          //   </table>
          <div>
            <div style={{ marginTop: 20 }}>
              <BootstrapTable
                striped
                hover
                keyField='created'
                data={data}
                columns={this.state.columns}
                pagination={paginationFactory()}
              />
            </div>
          </div>

        }
      </div>
    )
  }
}

export default Transactions
