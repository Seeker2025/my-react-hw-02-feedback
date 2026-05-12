import { ButtonBlock } from './FeedbaaackOptions.styled'

export const FeedbackOptions = ({option, handle}) =>{
    return (
        
            <ButtonBlock>
                {option.map(itm=>(
                    <li key={itm}>
                        <button type="button" onClick={handle}>{itm}</button>
                    </li>
                ))}
            </ButtonBlock>    
       
    );
} 