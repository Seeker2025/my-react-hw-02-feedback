// import { Component } from "react"
import { StatisticsComp } from './CafeStatistics.styled';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import { Statistics } from '../Statistics/Statistics';


export const CafeStatistics = ({
    good,
    neutral,
    bad,
    total,
    persent,
    handle,
    option
    
    }) => {
    
    
 
        return (
            <StatisticsComp>
               
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions handle={handle} option={option}/>
                </Section>
                    
                {total !==0 ?
                <Section title="Statistics">
                            <Statistics
                            good = { good }
                            neutral ={ neutral }
                            bad = { bad }
                            total={ total }
                            positivePercentage = { persent }
                            />
                </Section> 
                    : 
                <Notification message={"There is no feedback"}></Notification>    
                    }           
                
            </StatisticsComp>
            
        )
    }
