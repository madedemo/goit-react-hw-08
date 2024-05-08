import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectContacts } from "../redux/contacts/slice";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";


const ContactsPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

  return (
      <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList contacts={contacts} />
    </div>
  )
}

export default ContactsPage