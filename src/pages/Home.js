import React from "react";
import { CSSTransition } from 'react-transition-group';

import Login from "../components/Login";
import './Pages.css';

const Home = () => {

  const appearHome = true;
  
  return (
    <div className="home">
      <CSSTransition in={appearHome} appear={true} timeout={500} classNames="fade">          
      <Login />
      </CSSTransition>    

    </div>
  );
};

export default Home;