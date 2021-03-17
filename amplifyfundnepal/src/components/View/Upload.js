import React, { Component } from 'react'

export class Upload extends Component {
    onChange(e) {
        const file = e.target.files[0];
        Storage.put('example.png', file, {
            contentType: 'image/png'
        })
        .then (result => console.log(result))
        .catch(err => console.log(err));
    }
  
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Upload
