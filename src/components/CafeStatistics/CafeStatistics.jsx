import { Component } from "react"
import { StatisticsComp, ButtonBlock } from './CafeStatistics.styled';

import { Statistics } from '../Statistics/Statistics';


export const CafeStatistics = ({
    good,
    neutral,
    bad,
    total,
    persent,
    handle,
    
    }) => {
    
    
 
        return (
            <StatisticsComp>
                <h2>Please leave feedback</h2>
                <ButtonBlock>
                <button type="button" onClick={handle}>Good</button>
                <button type="button" onClick={handle}>Neutral</button>
                <button type="button" onClick={handle}>Bad</button>
                </ButtonBlock>
                <h3>Statistics</h3>
                  <Statistics
                  good = { good }
                  neutral ={ neutral }
                  bad = { bad }
                  total={ total }
                  persent = { persent }
                                    
                 />
                
            </StatisticsComp>
            
        )
    }
