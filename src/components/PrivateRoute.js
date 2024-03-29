import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const username = window.sessionStorage.getItem('username');

    return (
      <Route
        {...rest}
        render={props =>
          window.sessionStorage.getItem('token') ? 
              <Component username={username}/>
               :
              <Redirect to ={{pathname:"/NotFound"}} />
        }
      />
    );
  };

  /*

    :
              <Redirect to="/NotFound" />

  */

  export default PrivateRoute