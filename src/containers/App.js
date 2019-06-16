import React,{Component} from 'react';
import Input from '../components/Input';
import Quotes from '../components/Quotes';
import Footer from '../components/Footer';
import './App.css';

class App extends Component {

  state = {
    quotes:[],
    Quote:"",
    IsAddedQuote:false,
    counter:0,
    denuminatorCounter:10
    
  }

  getQuotes = (e) =>{

    this.setState({
      Quote:e.target.value
     })
  }

  submitQuotes = (e) =>{
    e.preventDefault();
    let newQuotes = {
      id:Math.floor(Math.random()*10),
      quote:this.state.Quote
    };
    this.setState({
      quotes:[...this.state.quotes,newQuotes],
      IsAddedQuote: !this.state.IsAddedQuote,
      counter: this.state.counter + 1
    })

 
  }

  DeleteQuote = (id) =>{
  const quotes = this.state.quotes.slice();
  quotes.splice(id,1);
  this.setState({
    quotes,
    counter: this.state.counter - 1
  })
  }
  render(){
   
    return (
      <div className="App">
        <h2>{this.state.Quote ? "Adding Quotes" : "Quotes"}</h2><p>{this.state.counter}/10</p>
        <Input
        getQuotes={this.getQuotes}
        submitQuotes={this.submitQuotes}
  
         />
        <Quotes quotes={this.state.quotes} DeleteQuote={this.DeleteQuote} />
        <Footer />

      </div>
    );
  }

}

export default App;
