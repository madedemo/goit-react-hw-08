import css from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactItem}>
        <p className={css.userdata}>
          <FaUserLarge />
          {contact.name}
        </p>
        <p className={css.userdata}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Contact;

