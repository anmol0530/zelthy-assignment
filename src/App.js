import React, { Component } from "react";
import "./App.scss";
import ContactsComponent from "./components/contactsComponent";
import Loader from "./components/loaderComponent";

class App extends Component {
  state = {
    contacts: [],
    fetching: true,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data, fetching: false });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        {this.state.fetching && <Loader />}
        {!this.state.fetching && (
          <ContactsComponent
            contacts={this.state.contacts}
            fetching={this.state.fetching}
          />
        )}
      </div>
    );
  }
}

export default App;
