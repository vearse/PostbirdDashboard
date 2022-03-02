import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header';
import LandingPage from './pages/landingpage/landingpage';
import ServicePage from './pages/servicesPage/servicePage';
import Footer from './components/footer/footer';
import AboutPage from './pages/AboutPage/aboutPage';
import ContactPage from './pages/contactPage/contactpage';
import DRIVER_REG from './pages/driver-reg/driver-reg';
import Register from './pages/register/register';
import FLEET_REGISTRATION from './pages/Fleet-Registration/fleet-registration';
import Login from './pages/Login/Login';
import RESET_PASSWORD from './pages/Password-Reset/Password';
import VERIFY_EMAIL from './pages/verify-email/verify-email';
import CREATE_NEW_PASSWORD from './pages/create-password/create-password';
import SUCCESS from './pages/success/success';
import DOCUMENT_REGISTRATION from './pages/doc-reg/doc-reg';

function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/services" component={ServicePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/contact" component={ContactPage}/>
      <Route exact path="/fleet-registration" component={FLEET_REGISTRATION}/>
      <Route exact path="/driver-registration" component={DRIVER_REG}/>
      {/* <Route exact path="/register" component={Register}/> */}
      <Route exact path="/login" component={Login}/>
      <Route exact path="/reset-password" component={RESET_PASSWORD}/>
      <Route exact path="/email-verification" component={VERIFY_EMAIL}/>
      <Route exact path="/create-password" component={CREATE_NEW_PASSWORD}/>
      <Route exact path="/success" component={SUCCESS}/>
      {/* <Route exact path="/register-documents" component={DOCUMENT_REGISTRATION}/> */}
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
