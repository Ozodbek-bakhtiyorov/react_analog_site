import React,{Component} from 'react';
import {AppHeaderContent} from './AppHeader.element.js';
export default class AppHeader extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {liked, allPosts} = this.props;
        return(
            <AppHeaderContent className='d-flex'>
                <h1> Ozodbek Bakhtiyorov</h1>
                <h2> {allPosts} posts, like {liked}</h2>
            </AppHeaderContent>
        )
    }
}
