import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../pages/Pages.css';

const LoginBadge = () => {
    
    return (
      <div className="LoginBadge">        

                <Badge  variant="warning">
                    Login
                </Badge>
                                
      </div>
    );
  }
export default LoginBadge;

/*

<button onClick={() => setName('Batman')}>
          Change
        </button>


*/