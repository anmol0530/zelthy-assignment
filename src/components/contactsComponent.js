import React, { Component } from "react";
import ContactComponent from "./contactComponent";

class ContactsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    this.setState({ contacts: this.props.contacts });
  }

  onDelete = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => id !== contact.id
    );
    this.setState({ contacts: newContacts });
  };

  render() {
    const contacts = this.state.contacts;
    console.log(contacts);
    return (
      <div className="contact-container">
        <center>
          <h1>Contact List</h1>
        </center>
        <hr />
        <div className="contact-list">
          {contacts.map((contact) => (
            <ContactComponent
              contact={contact}
              onDelete={this.onDelete}
              key={contact.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContactsComponent;
