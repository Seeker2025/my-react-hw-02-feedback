import  React  from 'react';
import { Section } from 'components/Section/Section';
import { PhonebookItem, ContactBlock } from './Phonebook.styled';

import { nanoid } from "nanoid";

export class Phonebook extends React.Component{
    state = {
    contacts: [],
    name: '',
    number: '',
            }

    handleChange = e =>{
        const { name, value  } = e.currentTarget;
        this.setState({ [name]: value, id:nanoid() });
    };

     handleSubmit = e =>{
        e.preventDefault();

         const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        };
        
          this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
            name: '',
            number: '',
        }), 
        
        () => {
            console.log(this.state.contacts);
        }
    );
        

        
    };

    render(){
        return(
            <PhonebookItem>
                <Section title={"Phonebook"}></Section>

                <form onSubmit ={this.handleSubmit}>
                    <h3>Name</h3>
                     <input 
                        type="text" name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        required
                     />
                    <h3>Number</h3>    
                     <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        required
                     />

                <button type="submit">Add Contact</button>     
                </form>

                <h2>Contacts</h2>
                <ContactBlock>
                {this.state.contacts.map(itm=>{

                    return (
                            <li key={itm.id}>
                                <p>{itm.name}: {itm.number}</p>
                            </li>)
                })}

                </ContactBlock>

               

            </PhonebookItem>
             
        );
    }
} 