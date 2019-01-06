import React, {Component} from 'react'
import CardList from './CardList'
import SearchBar from './SearchBar'
import {cats} from './cats'; 

class App extends Component{
    constructor(){
        super()
        this.state = {
            cats :cats,
            searchField : ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value});
    }
    

    render(){

        const filterCat = this.state.cats.filter(cats =>{
            return cats.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return (
        <div className= "tc">
            <h1>Kitty List :)</h1>
            <SearchBar searchChange = {this.onSearchChange}/>
            <CardList cats = {filterCat}/>
        </div>
        )
    }
    
}

export default App