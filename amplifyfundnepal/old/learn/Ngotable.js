import React, { Component } from 'react'

export class Ngotable extends Component {


    render() {
        if(typeof(this.props.ngodata)=="undefined" || this.props.ngodata==null )
        {
            return(<div></div>);
        }
        return (
            <div>
                {this.props.ngodata.map(ngo => (
                    <div className="card" style={{ boxShadow:"2px 2px 4px gray", width: '800px',display:"inline-block",padding:"15px",margin:"10px" }}>
                        <img className="card-img-top" src={ngo.imageLink} alt="gg" style={{objectFit:"contain", height:"200px" }} />
                        <div className="card-body">
                            <h4 className="card-title">Project Info</h4>
                            <p className="card-text">{ngo.activities}</p>
                            <a href="#/g" className="btn btn-primary">More</a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Ngotable
