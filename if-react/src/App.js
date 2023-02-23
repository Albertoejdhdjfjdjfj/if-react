import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './componens/SignIn/SignIn';
import HederPage from './componens/HederPage/HederPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HederPage />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default App;
