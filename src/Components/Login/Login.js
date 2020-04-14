import React from 'react';
import Auth from './useAuth';
import {
  useHistory,
  useLocation
} from "react-router-dom";

const Login = () => {
  const auth = Auth();
  
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignIn = () => {
    auth.signInWithGoogle()
      .then(res => {
        // history.push(from);
        console.log('hello');
        
      })
  }
  return (
    <div>
      {
        auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
        <button onClick={handleSignIn}>Sign In WIth Google</button>
      }
    </div>
  );
};

export default Login;