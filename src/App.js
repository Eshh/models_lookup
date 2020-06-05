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
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => res.json())
    .then(json => this.setState({models : json.data}))
  }
  handleChange = (e) =>{this.setState({ searchField : e.target.value})}

  render(){

    const { models , searchField } = this.state;
    const filteredModels = models.filter((model) => 
      model.employee_name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className = 'App'>
       <h1>Model Lookup</h1>
    <SearchBox 
     placeholder = 'search models'
     handleChange ={this.handleChange} />
    <CardList heroines = {filteredModels} />
       
      </div>
    )

    
          

  }
 
}

export default App;
