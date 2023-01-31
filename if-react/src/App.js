import { React } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './componens/SignIn/SignIn';
import Hotel from './componens/Hotel/Hotel';
import HederPage from './componens/HederPage/HederPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={localStorage.getItem('signIn') ? <HederPage /> : <Navigate to="/signIn" />}
      />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Routes>
  );
}

export default App;
