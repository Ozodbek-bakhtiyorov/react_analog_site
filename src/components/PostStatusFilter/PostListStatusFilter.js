import React, {Component} from 'react';
import {PostListStatusFilterContent} from './PostListStatusFilter.element'
class PostListStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name:'all', label:'All'},
            {name:'liked', label: "Liked"}
        ]
    }

    render() {
        const {filter, onFilterSelect} = this.props;

        const buttons = this.buttons.map(({name, label})=>{
            const active = filter === name;
            const classContent = active ? 'btn-info text-light':'btn-outline-secondary text-light';
            return(
                <button
                    key={name}
                    type="button"
                    className={`btn ${classContent} `}
                    onClick={()=>onFilterSelect(name)}
                >
                    {label}
                </button>
            )
        })
        return (
            <PostListStatusFilterContent>
                <div className="btn-group">
                    {/*<button className='btn btn-info'>All</button>*/}
                    {/*<button className='btn btn-dark'>Liked</button>*/}
                    {buttons}
                </div>
            </PostListStatusFilterContent>
        );
    }
}

export default PostListStatusFilter;