import React from 'react';
import { useNavigate } from 'react-router-dom';
import vector from '../../../assets/svg/Vector.svg';
import './SignOut.css';
const SignOut = () => {
  const navigate = useNavigate();
  return (
    <div
      className="signOut"
      id="signOut"
      onClick={() => {
        localStorage.clear();
        navigate('/signIn');
      }}
    >
      <img src={vector} />
      <p>Sign out</p>
    </div>
  );
};

export default SignOut;
