import styled from "styled-components";

export const ButtonBlock = styled.ul `
    display: flex;
    flex-direction: row;

    /* button{ 
    color: #fff;
    font-size: 1em;
    padding: 7px 17px;
    background-color: rgb(14, 142, 255);
    border-radius: 4px;
    border: none;
    } */
    li:not(:first-child) {
    margin-left: 7px;
    }
`;