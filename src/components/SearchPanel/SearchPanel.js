import React, {Component} from 'react';
import {SearchPanelContent} from './SearchPanel.element'
class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.onUpdateSearch= this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(e){
        const term = e.target.value;
        this.props.onUpdateSearch(term)
    }
    render() {
        return (
            <SearchPanelContent>
                <input
                    type="text"
                    className='form-control'
                    placeholder="Search by posts"
                    onChange={this.onUpdateSearch}
                />
            </SearchPanelContent>
        );
    }
}

export default SearchPanel;