import React, {Component} from "react";
import {PostListContent} from './PostList.element';
import PostListItem from "../PostListItem";
export default class PostList extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {posts, onDelete, onToggleImportant,onToggleLiked} = this.props;
        return(
            <PostListContent >
                {
                    posts.map((post)=> {
                        const {id, ...postProps} = post;
                        return(
                            <PostListItem
                                key={id}
                                {...postProps}
                                onDelete={()=>onDelete(id)}
                                onToggleImportant={()=>onToggleImportant(id)}
                                onToggleLiked = {()=>onToggleLiked(id)}
                            />

                        )
                    })
                }
            </PostListContent>
        )
    }
}