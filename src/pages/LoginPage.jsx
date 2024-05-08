import * as Yup from 'yup'
import { useDispatch } from "react-redux"
import { login } from "../redux/auth/operations"
import { useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm/AuthForm"


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: '',
    }

    function handleSubmit(values, action) {
        dispatch(login(values))
        navigate('/contacts')
        action.resetForm()
    }

    const scheme = Yup.object().shape({
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
          type="login"
          title="Login"
      />
  )
}

export default LoginPage