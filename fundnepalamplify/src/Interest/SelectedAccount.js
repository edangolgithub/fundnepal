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

            <div className="card" style={{fontSize:".9em",minHeight:"450px",marginBottom:"10px",fontFamily:"efont"}}>
              { data &&
                    <div className="card-body">
                          <h5 className="card-title">Account details</h5>
                        <div><span className="titl"> Name :</span> <span className="dat">{data.name}</span> </div>
                        <div><span className="titl"> Phone :</span><span className="dat"> {data.phone}</span></div>
                        <div><span className="titl"> Address :</span><span className="dat">{data.address}</span></div>
                        <div><span className="titl"> Email :</span><span className="dat">{data.phone}</span></div>
                    </div>


                }
            </div>

        )
    }
}

export default SelectedAccount
