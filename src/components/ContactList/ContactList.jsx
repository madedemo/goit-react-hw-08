import css from './ContactList.module.css';
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts &&
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactList;