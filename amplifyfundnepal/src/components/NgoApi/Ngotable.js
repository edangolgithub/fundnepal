import React, { Component } from 'react'

export class Ngotable extends Component {
    parseurl(url) {

        var x = url.split('/');
        var y = x.pop();
        return y;
    }

    render() {
        if (typeof (this.props.ngodata) == "undefined" || this.props.ngodata == null) {
            return (<div key="1"></div>);
        }
        return (
            <div className="x">
                {this.props.ngodata.map(ngo => (
                    <div className="card evan-card" key={ngo.OrganizationId} >
                        <img className="card-img-top gg mx-auto d-block" src={ngo.images[0]} alt="gg" />
                        <div className="card text-center">
                            <div className="card-header"><h5 className="card-title ecardtitle">{ngo.name}</h5></div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row cole">
                                        <div className="col">
                                            <p className="card-text fntsm">
                                                {ngo.mission}
                                            </p>
                                            <a href={ngo.url} rel="noreferrer" target="_blank" className="btn btn-link btnmar ">Website</a>
                                        </div>
                                        <div className="col">

                                            {
                                                ngo.projects.map(project =>
                                                    <div className="card mb-1 p-1 fntsm"  >
                                                        <a href={project} rel="noreferrer" target="_blank">{this.parseurl(project)}</a>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col">
                                        <a href={ngo.url} rel="noreferrer" target="_blank">
                                            <div className="card imcard">
                                                {ngo.images.map(image =>
                                                    <img className="smim" src={image} alt="profile" />
                                                )}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="contactfooter">
                                    {/* <p className="pnp">{ngo.phones[0]}</p>
                                <p className="pnp">{ngo.emails[0]}</p>
                                <p className="pnp">{ngo.addressLine1}</p>
                                <p className="pnp">{ngo.city}</p> 
                                <p className="pnp">{ngo.country}</p>
                                <p className="pnp">{ngo.postal}</p>
                                <p className="pnp">{ngo.establisheddate}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Ngotable
