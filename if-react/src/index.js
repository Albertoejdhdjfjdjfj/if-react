import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Hotel from './componens/Hotel/Hotel';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
