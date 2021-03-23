import React, { Component } from 'react'
import Amplify, { Storage } from 'aws-amplify';
import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);
export class Upload extends Component {
    onChange(e) {
       if(!e.target.files[0])
       {
        console.log("cancel")
           return;
       }
        const file = e.target.files[0];

        console.log(file)
        Storage.put(file.name, file, {
            contentType: file.type
        })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <input
                    type="file" accept='image/png,image/jpg,image/jpeg,image/gif'
                    onChange={(e) => this.onChange(e)}
                />
            </div >
        )
    }
}

export default Upload
