import React, {Component} from 'react';
import {
    PostListItemContent,
    Label,
    Buttons,
    Like
} from './PostListItem.element'
class PostListItem extends Component {
    constructor(props) {
        super(props);
        // this.state ={
        //     important:false,
        //     like:false
        // }
        // this.onLike = this.onLike.bind(this)
        // this.onImportant = this.onImportant.bind(this)
    }
    // onLike (){
    //     this.setState(({like}) =>({like:!like}) )
    // }
    // onImportant (){
    //     this.setState(({important}) =>({important:!important}) )
    // }
    render() {
       const {label,onDelete,onToggleImportant,onToggleLiked,important, like} = this.props;
       // const {important, like} = this.state;
       let classes = '';
       let star = 'fas fa-star'
       if(important) {
           classes+=' important';
           star+= ' important'
       }


        return (
            <PostListItemContent className='d-flex justify-content-between'>
                    <Label className={classes} onClick={onToggleLiked}>
                        {label}
                    </Label>
                    <Buttons className='d-flex justify-content-center align-items-center'>
                        <button
                            type="button"
                            className='btn-sm'
                            onClick={onToggleImportant}
                        >
                            <i className={star}></i>
                        </button>
                        <button
                            type="button"
                            className='btn-sm btn-danger'
                            onClick={onDelete}
                        >
                            <i className='fas fa-trash text-danger '></i>
                        </button>
                        <Like like={like}>
                            <i className='fas fa-heart'></i>
                        </Like>

                    </Buttons>
            </PostListItemContent>
        );
    }
}

export default PostListItem;