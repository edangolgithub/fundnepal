import React, { Component } from 'react'
import axios from 'axios'
export class InterestApi extends Component {
    state = {
        items: [],
        author: '',
        title: '',

    }
    getdata() {
        axios.get('http://localhost:3333/posts')
            .then(data =>
                this.setState({ items: data })
            )
    }
    postdata(data) {
        axios.post('http://localhost:3333/posts',data)
    }
    componentDidMount() {
        this.getdata();
    }
    handleSubmit(event) {
        event.preventDefault();
        var data={title:this.state.title,author:this.state.author};
         this.postdata(data);
    }
    ChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val}); // assign state values from form name
      }
    constructor() {
        super();
        console.log("h")
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <label className="sr-only" htmlFor="title">title</label>
                    <input type="text" onChange={this.ChangeHandler} name="title" className="form-control" id="title" placeholder="title" />
                    <label className="sr-only" htmlFor="author">author</label>
                    <input type="text" onChange={this.ChangeHandler} name="author" className="form-control" id="author" placeholder="author" />
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>

            </div>
        )
    }
}

export default InterestApi
