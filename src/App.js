// App.js
import React from 'react';
import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CustomItemContext from './context/ItemContext';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
import Notestate from './context/Notestate';


const App = () => {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type,
      });
    };
    return (
        // <CustomItemContext>
        //     <Header />
        //     <ProductList />
        // </CustomItemContext>
        <>

     <CustomItemContext>
        <Notestate>
        
          <Router>
         
        <Navbar />
        <Alert alert={alert}/>
            <div className="container">
    
           <Routes>
            <Route element={<Home showAlert={showAlert}/>} exact path="/"></Route>
            <Route element={<About showAlert={showAlert}/>} exact path="/about"></Route>
            <Route element={<Login showAlert={showAlert} />} exact path="/login"></Route>
            <Route element={<Signup showAlert={showAlert}/>} exact path="/signup"></Route>
    
             </Routes>
             </div>
          </Router>
          </Notestate>
          </CustomItemContext>
        </>
     
    );
};

export default App;
