import React, {Component} from "react";
import {PostAddFormContent} from "./PostAddForm.element";
export default class PostAddForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            body:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.clearBody = this.clearBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeHandler(e){
        this.setState({body:e.target.value})
    }
    clearBody(){
        this.setState({body:''})
    }
    onSubmit(e){
        if(this.state.body) {
           this.props.onAdd(e, this.state.body)
            this.clearBody()
        }
        else{
            e.preventDefault();
            alert('This input should not be empty. Please Write something!!!')
        }
    }
    render() {
        return(
            <PostAddFormContent
                className='d-flex'
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="What are you thinking about?"
                    className="form-control"
                    onChange={this.changeHandler}
                    value={this.state.body}
                />
                <button
                    type="submit"
                    className="btn text-light btn-primary"
                >
                    Add Post
                </button>
            </PostAddFormContent>
        )
    }
}