import  React  from 'react';
import { Section } from 'components/Section/Section';
import { PhonebookItem } from './Phonebook.styled';

export class Phonebook extends React.Component{
    state = {
    contacts: [],
    name: ''
            }
    render(){
        return(
            <PhonebookItem>
                <Section title={"Phonebook"}></Section>

                <input type="text" name="name" required />

            </PhonebookItem>
             
        );
    }
} 