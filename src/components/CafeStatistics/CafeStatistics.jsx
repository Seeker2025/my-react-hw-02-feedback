import { Component } from "react"


export class CafeStatistics extends Component{
    state = {
            good: 0,
            neutral: 0,
            bad: 0
            }
     
      
           
    render(){
        const{ good, neutral, bad } = this.state;  
        return (
            <>
                <h2>Please leave feedback</h2>
                <div>ddd</div>
                <button type="button">Good</button>
                <button type="button">Neutral</button>
                <button type="button">Bad</button>
                <h3>Statistics</h3>
                <p>Good:    {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad:     {bad}</p>
            </>
            
        )
    }
}