import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import background from '../../assets/images/castelmezzano.jpg';
import logo from '../../assets/svg/logo.svg';
import night from '../../assets/svg/Night.svg';
import account from '../../assets/svg/AccountCircle.svg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function requestCheckUser() {
    await fetch(`http://localhost:3001/users?email=${email}&&password=${password}`)
      .then((data) => data.json())
      .then(user=>user[0].id ? (localStorage.setItem('signIn', true), navigate('/')) : '');
  }

  return (
    <div className="top_section" style={{ backgroundImage: `url(${background})` }}>
      <header>
        <img src={`${logo}`} />
        <nav>
          <div className="word_interface">
            <p>Stays</p>
            <p>Attractions</p>
          </div>
          <div className="svg_interface">
            <img src={`${night}`} />
            <img
              src={`${account}`}
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(6390%) hue-rotate(322deg) brightness(100%) contrast(92%)'
              }}
            />
          </div>
        </nav>
      </header>
      <div className="sign_form">
        <h2>Sign in</h2>
        <div>
          <p>Email address</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={requestCheckUser}>Sing in</button>
      </div>
    </div>
  );
};

export default SignIn;
