import { Component } from "react"
import { StatisticsComp, ButtonBlock } from './CafeStatistics.styled';


export class CafeStatistics extends Component{
    state = {
            good:    0,
            neutral: 0,
            bad:     0,
            }
    
   handleBtn = e => {
    const type = (e.target.textContent).toLowerCase();
       
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  
           
    render(){
        const{ good, neutral, bad } = this.state;  
        return (
            <StatisticsComp>
                <h2>Please leave feedback</h2>
                <ButtonBlock>
                <button type="button" onClick={this.handleBtn}>Good</button>
                <button type="button" onClick={this.handleBtn}>Neutral</button>
                <button type="button" onClick={this.handleBtn}>Bad</button>
                </ButtonBlock>
                <h3>Statistics</h3>
                <p>Good:    {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad:     {bad}</p>
            </StatisticsComp>
            
        )
    }
}