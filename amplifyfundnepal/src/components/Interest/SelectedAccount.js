import React, { Component } from 'react'

export class SelectedAccount extends Component {
    // constructor() {
    //     super();

    // }

    render() {
        if (typeof (this.props.data) === "undefined" || this.props.data === null) {
            return (<div>h</div>);
        }
        const data = this.props.data;
        return (

            <div className="card acdiv" >
              { data &&
                    <div className="card-body actable">
                          <h5 className="card-title">Account details</h5>
                          <div className="table-responsive ">
                          <table className="table table-borderless">                            
                            <tbody>
                              <tr>
                                <th scope="row"><span className="titl"> Name :</span></th>
                                <td><span className="dat">{data.name}</span> </td>
                                </tr>
                                <tr>
                                <th><span className="titl"> Phone :</span></th>
                                <td><span className="dat"> {data.phone}</span></td>
                              </tr>
                              <tr>
                                <th scope="row"><span className="titl"> Address :</span></th>
                                <td><span className="dat">{data.address}</span></td>
                                </tr>
                                <tr>
                                <th><span className="titl"> Email :</span></th>
                                <td><span className="dat">{data.phone}</span></td>
                              </tr>
                            </tbody>
                          </table>
                         </div>   
                    </div>


                }
            </div>

        )
    }
}

export default SelectedAccount
