import React, { useEffect, useState } from "react";
import "../styles/contactsComponent.scss";
import {
  emailIcon,
  phoneIcon,
  websiteIcon,
  heart,
  heartFilled,
  editIcon,
  trash,
} from "../images";
import EditContact from "./editComponent";

const ContactComponent = ({ contact, onDelete, handleSubmit, refresh }) => {
  const [filled, setFilled] = useState(JSON.parse(localStorage.getItem(`filled-${contact.id}`)));
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const [website, setWebsite] = useState(contact.website);

  const onSubmit = (data) => {
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    setWebsite(data.website);
    setEdit(false);
    handleSubmit(data, contact.id); 
  };

  const onCancel = () => {
    setEdit(false);
  };

  const onDel = (id) => {
    onDelete(id);
  };

  const newContact = {
    name: name,
    email: email,
    phone: phone,
    website: website,
  };

  useEffect(() => {
    if (refresh) {
      setFilled(false);
    }
  },[refresh])

  useEffect(() => {
    localStorage.setItem(`filled-${contact.id}`, filled);
  }, [filled])

  return (
    <div className="contact">
      <div className="img-container">
        <img
          className="avatar"
          src={`https://avatars.dicebear.com/api/avataaars/${contact.name}.svg?background=%23f5f5f5`}
          alt="avatar"
        />
      </div>
      <div className="info">
        <h3 className="">{name}</h3>
        <div>
          <img className="icon" src={emailIcon} alt="email" />
          {email}
        </div>
        <div>
          <img className="icon" src={phoneIcon} alt="phone" />
          {phone}
        </div>
        <div>
          <img className="icon" src={websiteIcon} alt="website" />
          {"http://" + website}
        </div>
      </div>
      <div className="options">
        <img
          className="icon"
          src={filled ? heartFilled : heart}
          alt={filled ? heartFilled : heart}
          onClick={() => setFilled((x) => !x)}
        />
        <img
          className="icon"
          src={editIcon}
          alt="edit"
          onClick={() => setEdit(true)}
        />
        <img
          className="icon"
          src={trash}
          alt="trash"
          onClick={() => onDel(contact.id)}
        />
      </div>
      {edit && (
        <EditContact
          contact={newContact}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default ContactComponent;
