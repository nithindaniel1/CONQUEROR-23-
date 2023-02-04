import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APPOINTMENT_FORM_PAGE, HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from './config/routes';
import AppointmentFormPage from './ui/pages/appointment_form_page';
import HomePage from './ui/pages/home_page';
import LoginPage from './ui/pages/login_page';
import SignupPage from './ui/pages/signup_page';
import {  collection, getDocs } from 'firebase/firestore/lite';
import { db } from './config/firebase';

function App() {
  async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
    return cityList;
  }

  getCities(db)
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={LOGIN_PAGE} element={<LoginPage />} />
          <Route path={SIGNUP_PAGE} element={<SignupPage />} />
          <Route path={APPOINTMENT_FORM_PAGE} element={<AppointmentFormPage />} />
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
