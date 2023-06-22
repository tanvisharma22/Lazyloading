import React from 'react';
import Homepage from './Homepage';
import Login from './Login';
import PasswordReset from './PasswordReset';
import AuthenticatePage from './AuthenticatePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
 

  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path = '/' element = {<AuthenticatePage />}/>
        <Route path = '/homepage' element = {<Homepage />}/>
         <Route path = '/login' element = {<Login />}/>
          <Route path = '/resetpassword' element = {<PasswordReset/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
};

export default App;






