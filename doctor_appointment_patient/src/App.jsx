import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  APPOINTMENT_DETAILS_ROUTE,
  APPOINTMENT_FORM_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
} from "./config/routes";
import AppointmentDetailsPage from "./ui/pages/appointment_details_page";
import AppointmentFormPage from "./ui/pages/appointment_form_page";
import HomePage from "./ui/pages/home_page";
import LoginPage from "./ui/pages/login_page";
import SignupPage from "./ui/pages/signup_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={SIGNUP_ROUTE} element={<SignupPage />} />
          <Route
            path={APPOINTMENT_FORM_ROUTE}
            element={<AppointmentFormPage />}
          />
          <Route
            path={APPOINTMENT_DETAILS_ROUTE}
            element={<AppointmentDetailsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
