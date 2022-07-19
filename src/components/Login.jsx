import React from 'react';


const Login = ({ login, register, logout, user}) => {


  return (
    <div>
      {
        !user.email ?
        <>
          <button onClick={login} className="btn btn__login">Login</button>
          <button onClick={register} className="btn btn__register">Register</button>
        </>
        :
        <>
        <button onClick={logout} className="btn__logout">{user.email[0].toUpperCase()}</button>
        </>
      }
    </div>
  );
}

export default Login;
