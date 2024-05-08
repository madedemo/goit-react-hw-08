import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { nanoid } from "nanoid";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .matches(/^[0-9]+$/, "Invalid number")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    actions.resetForm(initialValues);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.label}>
          <span>Number</span>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="span"
            className={css.error}
          />
        </label>
        <button className={css.button} type="submit">
          Add contacts
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
