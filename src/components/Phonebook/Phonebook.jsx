import  React  from 'react';
import { Section } from 'components/Section/Section';
import { PhonebookItem, ContactBlock } from './Phonebook.styled';

import { nanoid } from "nanoid";

export class Phonebook extends React.Component{
    state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
            ],
    filter: '',
    name: '',
    number: '',
            }

    toFilter = () => {
    return this.state.contacts.filter(contact =>
        contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase())
    );
}     

    

    handleChange = e =>{
        const { name, value  } = e.currentTarget;
        this.setState({ [name]: value });
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
            console.log(this.state.filter);
        }
    );
        

        
    };

    render(){
        const filteredContacts = this.toFilter();
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
                <h2>Find contacts by name </h2>
                    <input 
                        type="text"
                        name="filter"
                        onChange={this.handleChange}
                        value={this.state.filter}
                        
                     />

                <h2>Contacts</h2>
                <ContactBlock>
                {filteredContacts.map(itm=>{

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