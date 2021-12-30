import React,{Component} from 'react';
import {AppContent} from './App.element.js';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostList from "../PostList";
import PostListStatusFilter from "../PostStatusFilter";
import PostAddForm from "../PostAddForm/PostAddForm";
import {GlobalStyles} from '../../GlobalStyles'

export default class App extends Component{
    constructor() {
        super();
        this.state = {
            data: [
                {id:1,like:false,label:'Hi Everybodies Whats up!', important:true},
                {id:2,like:false,label:'My Name Is Ozodbek Bakhtiyorov', important:false},
                {id:3,like:false,label:'What are your names', important:false},
                {id:4,like:false,label:'\'Please,  introduce yourself {^_^} ', important:false},
            ],
            term:'',
            filter:'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.clearAllData = this.clearAllData.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = this.state.data.length;
    }
    deleteItem (id){
        this.setState(({data})=>{
            const index = data.findIndex(elem=> elem.id ===id);
            const before = data.slice(0,index);
            const after = data.slice(index+1);
            const newArr = [...before,...after];
            return{
                data:newArr
            }

        })
    }
    addItem(e,body){
        e.preventDefault();
       const newItem = {
           label:body,
           important:false,
           id:++this.maxId
       }
       this.setState(({data})=>{
           const newArr = [...data,newItem];
           return{
               data:newArr
           }
       })
    }
    clearAllData(){
        this.setState(({data})=>{
            const EmptyData = data.slice(this.state.data.length);
            return{
                data:EmptyData
            }
        })
    }
    onToggleImportant(id){
        this.setState(({data})=>{
            const index = data.findIndex(el=>el.id === id)
            const oldItem= data[index]
            const newItem = {...oldItem,important:!oldItem.important}
            const newArr = [...data.slice(0,index),newItem,...data.slice(index+1)]//bu arrayda eski  obyekt o'chirib tahslangan va o'rtaga yangi object qo'shilgan like bosilgandan keyin
            return{
                data:newArr
            }
        })
    }
    onToggleLiked(id){
        this.setState(({data})=>{
            const index = data.findIndex(el=>el.id === id)
            const oldItem= data[index]
            const newItem = {...oldItem,like:!oldItem.like}
            const newArr = [...data.slice(0,index),newItem,...data.slice(index+1)]//bu arrayda eski  obyekt o'chirib tahslangan va o'rtaga yangi object qo'shilgan like bosilgandan keyin
            return{
                data:newArr
            }
        })
    }
    searchPost(items,term){       // bu yangi array qaytaradi filterlangan arra
        if(term.length === 0){
            return items;
        }
        return items.filter(item=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    onUpdateSearch(term){
        this.setState({term})//this.setState({term:term})
    }
    filterPost (items,filter){
        if(filter === 'liked'){
            return items.filter(item=>item.like);
        }
        else{
            return items;
        }
    }
    onFilterSelect(filter){
        this.setState({filter})
    }
    render(){
        const {data,term, filter} = this.state
        const liked = data.filter(item=>item.like).length///bu bizga yangi array qaytaradi va bu array faqat like bosilganlari bo'ladi
        const allPosts = data.length;

        // const visiblePosts = this.searchPost(data,term)//bu bilan faqat search ishlidi
        const visiblePosts =this.filterPost( this.searchPost(data,term),filter)//bu bilan ham filter ham like ishlidi
        return(
            <AppContent>
                <GlobalStyles/>
                <AppHeader liked = {liked} allPosts={allPosts}/>
                <div className='d-flex align-items-center'>
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <button
                        style={{marginRight:'20px'}}
                        className="btn btn-danger"
                        onClick={this.clearAllData}
                        type='button'
                    >
                        Clear
                    </button>
                    <PostListStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts = {visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLiked = {this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem}/>
            </AppContent>
        )
    }
}
