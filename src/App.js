
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Doctors from './Components/Doctors/Doctors';
import Service from './Components/Service/Service';
import Hedaer from './Components/Header/Hedaer';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Appoinment from './Components/Appoinment/Appoinment';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      
     <BrowserRouter>
     <Route>
     <Hedaer/>
     </Route>
     <Switch>
       <Route exact path="/">
         <Home></Home>

       </Route>
       <Route exact path="/home">
         <Home></Home>
         

       </Route>
       <Route path="/about">
           <About></About>
           </Route>
       <Route path="/doctors">
         <Doctors></Doctors>
       </Route>
       <Route path="/service">
         <Service></Service>

       </Route>
       <Route path="/login">
         <Login></Login>

       </Route>
       <PrivateRoute path="/appointment">
         <Appoinment></Appoinment>

       </PrivateRoute>
       <PrivateRoute exact path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
       <PrivateRoute path="/contact">
         <Contact></Contact>
       </PrivateRoute>
      
     <Route path="/*">
       <PageNotFound> </PageNotFound>

     </Route>
     </Switch>
     <Route>
       <Footer></Footer>
     </Route>
     
     </BrowserRouter>
     </AuthProvider>
    </div>
   
  );
}

export default App;
