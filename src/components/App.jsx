import { Component } from 'react';
import { CafeStatistics } from "./CafeStatistics/CafeStatistics";




export class App extends Component {
   state = {
            good:0,
            neutral:0,
            bad:    0,
            }

   handleBtn = e => {
    const type = (e.target.textContent).toLowerCase();
       
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };          
   
  countTotalFeedback = () =>{
      return Object.values(this.state).reduce((acc, itm)=>(acc += itm), 0);
    } 
    
  countPositiveFeedbackPercentage = () => {
    const res = ((this.state.good / this.countTotalFeedback())  * 100)
    return res ? res : 0; 
     
  }  

  render(){
    const total = this.countTotalFeedback();
    const persent = this.countPositiveFeedbackPercentage().toFixed();
  return (

 
    <>
    <h1>Cafe Expresso</h1>

    <CafeStatistics
      good = {this.state.good }
      neutral = {this.state.neutral}
      bad = {this.state.bad}
      handle = {this.handleBtn}
      total = {total}
      persent = {persent}
      
    />

    
    </>
  )}
};

