import React, { Component } from "react";
import { refresh } from "../images";
import ContactComponent from "./contactComponent";

class ContactsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      refresh: false,
    };
  }
  componentDidMount() {
    if (localStorage.getItem('contacts') === null) {
      this.setState({ contacts: this.props.contacts, refresh: false });
    } else {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')), refresh: false });
    }
  }

  handleSubmit = (data, id) => {
    console.log(data);
    const newContacts = this.state.contacts.map(contact => {
      if(contact.id === id){
        return {...contact, ...data};
      }
      return contact;
    })
    console.log()
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  }

  onDelete = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => id !== contact.id
    );
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  };

  handleRefresh = () => {
    this.setState({ contacts: this.props.contacts, refresh: true });
    localStorage.clear();
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="contact-container">
        <center>
          <h1>Contact List</h1>
          <img className="refresh" src={refresh} alt='refresh' onClick={this.handleRefresh}/>
        </center>
        <hr />
        <div className="contact-list">
          {contacts.map((contact) => (
            <ContactComponent
              contact={contact}
              onDelete={this.onDelete}
              key={contact.id}
              handleSubmit={this.handleSubmit}
              refresh={this.state.refresh}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContactsComponent;
