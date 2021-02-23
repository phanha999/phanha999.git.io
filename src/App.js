import React from 'react';
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Move from './components/router/Move';

function App() {
  return (
    <Router>
      <div id="main">
        <Header/>
        {/* <ContainerApp/> */}
        <Switch>
          <Move/>
        </Switch>
        <Footer/>
        <Modal/>
      </div>     
    </Router>  
    
  );
}

export default App;
