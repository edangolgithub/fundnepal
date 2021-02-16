import React, { Component } from 'react'


export class SelectedAccount extends Component {
    render() {
        if (typeof (this.props.data) === "undefined" || this.props.data === null) {
            return (<div>h</div>);
        }
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h6>Account details</h6>
                            <div className="cahrd">
                                <div className="card-bcody">
                                    <p >{this.props.data.accountid}</p>
                                    <p >{this.props.data.name}</p>
                                    <p >{this.props.data.address}</p>
                                    <p >{this.props.data.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <select className="custom-select my-1 mr-sm-2">
                                        <option >Choose...</option>
                                        {
                                            this.props.data.accounttype === 'undefined' ? null :
                                                this.props.data.accounttype.map(t =>
                                                    <option key={t} value={t}>{t}</option>
                                                )}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectedAccount
