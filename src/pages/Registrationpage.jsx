import * as Yup from 'yup'
import { useDispatch } from "react-redux"
import { register } from "../redux/auth/operations"
import { useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm/AuthForm"


const RegistrationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    function handleSubmit(values, action) {
        dispatch(register(values))
        navigate('/contacts')
        action.resetForm()
    }

    const scheme = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
    })

  return (
      <AuthForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={scheme}
          type="register"
          title="Registration"
      />
  )
}

export default RegistrationPage;