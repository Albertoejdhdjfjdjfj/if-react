import React from 'react';
import { useNavigate } from 'react-router-dom';
import vector from '../../../assets/svg/Vector.svg';
import './SignOut.css';

const SignOut = ({ display }) => {
  const navigate = useNavigate();

  return (
    <div
      className="signOut"
      id="signOut"
      onClick={() => {
        localStorage.clear();
        navigate('/signIn');
      }}
      style={{ display: display ? 'flex' : 'none' }}
    >
      <img src={vector} />
      <p>Sign out</p>
    </div>
  );
};

export default SignOut;
