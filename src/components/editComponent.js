import { Component } from "react";
import "../styles/editComponent.scss";

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone,
      website: this.props.contact.website,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  onCancel = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <div className="popup">
        <div className="popup-wrapper">
          <div className="header">
            <h3>Edit Contact</h3>
            <span onClick={this.onCancel}>x</span>
          </div>
          <form
            className="form"
            onSubmit={this.onSubmit}
            // noValidate
            autoComplete="off"
          >
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                * Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter first name/last name"
                onChange={this.onChange}
                value={this.state.name}
                maxLength="70"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                * Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={this.onChange}
                value={this.state.email}
                maxLength="30"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                * Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter phone number"
                onChange={this.onChange}
                value={this.state.phone}
                required
                maxLength="30"
              />
            </div>
            <div className="form-field">
              <label htmlFor="name" className="form-label">
                * Website:
              </label>
              <input
                type="text"
                id="url"
                name="website"
                className="form-control"
                placeholder="Enter website"
                onChange={this.onChange}
                value={this.state.website}
                maxLength="30"
                required
              />
            </div>
            <hr className="footer-hr" />
            <div className="footer">
              <button className="cancel" type="button" onClick={this.onCancel}>
                Cancel
              </button>
              <button className="submit" type="submit">
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditContact;
