import { Component } from "react"
import { StatisticsComp, ButtonBlock } from './CafeStatistics.styled';


export class CafeStatistics extends Component{
    state = {
            good:   0,
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
        const{ good, neutral, bad } = this.state; 
        const total =  this.countTotalFeedback();
        let persent = this.countPositiveFeedbackPercentage().toFixed();
       console.log(!persent);
       
        return (
            <StatisticsComp>
                <h2>Please leave feedback</h2>
                <ButtonBlock>
                <button type="button" onClick={this.handleBtn}>Good</button>
                <button type="button" onClick={this.handleBtn}>Neutral</button>
                <button type="button" onClick={this.handleBtn}>Bad</button>
                </ButtonBlock>
                <h3>Statistics</h3>
                <p>Good: <span>{good}                </span></p>
                <p>Neutral: <span>{neutral}          </span></p>
                <p>Bad: <span>{bad}                  </span></p>
                <p>Total: <span>{total}              </span></p>
                <p>Positive feedback: <span>{ persent }</span>%</p>
            </StatisticsComp>
            
        )
    }
}