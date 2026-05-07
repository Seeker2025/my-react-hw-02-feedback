import styled from "styled-components";

export const ButtonBlock = styled.div `
    button{ 
    color: #fff;
    font-size: 1em;
    padding: 7px 12px;
    background-color: rgb(14, 142, 255);
    border-radius: 4px;
    border: none;
    }
    button:not(:first-child) {
    margin-left: 8px;
    background-color: #893131;
  }
`;

export const StatisticsComp = styled.div`
  
   border: 1px solid black;

   p{
    color: red;
    font-size: 1.2em;
   }
  
`;