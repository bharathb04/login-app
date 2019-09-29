import React from "react";
import { CSSTransition } from 'react-transition-group';

import Login from "../components/Login";
import LoginBadge from "../components/LoginBadge";
import HomeCard from "../components/HomeCard";
import HomeNav from "../components/HomeNav";
import './Pages.css';

const Home = () => {

  const appearHome = true;
  
  return (
    <div>


      <div >
          <HomeNav />
          <HomeCard />
      </div>

      <div>
          <LoginBadge/>
      </div>

      <div className="home">
        
        <CSSTransition in={appearHome} appear={true} timeout={500} classNames="fade">     
        <Login /> 
        </CSSTransition>    

      </div>

      
    </div>
  );
};

export default Home;