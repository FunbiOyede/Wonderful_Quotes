import React,{Component} from 'react';
import Input from '../components/Input/Input';
import Quotes from '../components/Quotes/Quotes';
import Footer from '../components/Footer/Footer';

import './App.css';
import Header from '../components/Header/Header'
import AppContext from '../components/Context/AppContext';

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
   
    if(this.state.counter > 10){
     alert("quotes filled ");
     this.setState({
       counter:this.state.denuminatorCounter
     })
    } else if(this.state.counter < 0){
      this.setState({
        counter:0
      })
    }
    return (
      <AppContext>
        <Header />
        <h2>{this.state.Quote ? "Adding Quotes" : "Quotes"}</h2><p>{this.state.counter}/10</p>
        <Input
        getQuotes={this.getQuotes}
        submitQuotes={this.submitQuotes}
  
         />
        <Quotes quotes={this.state.quotes} DeleteQuote={this.DeleteQuote} />
        <Footer />
      </AppContext>
    );
  }

}

export default App;
