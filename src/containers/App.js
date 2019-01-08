import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import {cats} from '../components/cats'; 
import Scroll from '../components/Scroll';

class App extends Component{
    constructor(){
        super()
        this.state = {
            cats : [],
            searchField : ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value});
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users=> this.setState({cats: users}));
    }

    render(){

        const filterCat = this.state.cats.filter(cats =>{
            return cats.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return (
        <div className= "tc">
            <h1>Kitty List :)</h1>
            <SearchBar searchChange = {this.onSearchChange}/>
            <Scroll className= "tc">
                <CardList cats = {filterCat}/>
            </Scroll>
        </div>
        )
    }
    
}

export default App