import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../src/redux/auth/operations";
import { selectIsRefreshing } from "../src/redux/auth/slice";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Private from "./components/routes/PrivateRoute";
import Restricted from "./components/routes/RestrictedRoute";

const HomePage = lazy(() => import('./pages/HomePage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/Registrationpage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))


const App = () => {
  const dispatch = useDispatch(); 
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <Restricted>
                <RegistrationPage />
              </Restricted>
            }
          />
          <Route
            path="/login"
            element={
              <Restricted>
                <LoginPage />
              </Restricted>
            }
          />
          <Route
            path="/contacts"
            element={
              <Private>
                <ContactsPage />
              </Private>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
    </Routes>
    </Suspense>
  )
}
export default App