import React ,{ Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box-component';

class App extends Component {
  constructor(){
    super()
    this.state = {
      models : [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => this.setState({models : json}))
  }
  handleChange = (e) =>{this.setState({ searchField : e.target.value})}

  render(){

    const { models , searchField } = this.state;
    const filteredModels = models.filter((model) => 
      model.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className = 'App'>
       <h1>Model Lookup</h1>
    <SearchBox 
     placeholder = 'search models'
     handleChange ={this.handleChange} />
    <CardList models = {filteredModels} />
       
      </div>
    )

    
          

  }
 
}

export default App;
