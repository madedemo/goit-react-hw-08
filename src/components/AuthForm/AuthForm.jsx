import css from './AuthForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const AuthForm = ({ initialValues, onSubmit, scheme, type, title }) => {
  return (
      <div className={css.authform}>
          <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={scheme}
          >
              <Form>
                  {type === 'register' && (
                      <label>
                          Name
                          <Field className={css.input} type="text" name="name" placeholder="Name" />
                          <ErrorMessage name="name" component="div" />
                      </label>
                  )}
                  <label>
                      Email
                      <Field className={css.input}  type="email" name="email" placeholder="Email" />
                      <ErrorMessage name="email" component="div" />
                  </label>
                  <label>
                      Password
                      <Field className={css.input}  type="password" name="password" placeholder="Password" />
                      <ErrorMessage name="password" component="div" />
                  </label>
                  <button type="submit">{title}</button>
                  {type === 'register' ? (
                      <p>
                          Already have an account? <Link to="/login">Login</Link>
                      </p>
                  ) : (
                        <p>
                        Don&#39;t have an account? <Link to="/register">Register</Link>
                        </p>
                  )}
              </Form>
          </Formik>
        </div>
    )
}


export default AuthForm;