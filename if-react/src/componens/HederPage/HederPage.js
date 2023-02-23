import { React } from 'react';
import { Navigate } from 'react-router-dom';
import TopSection from '../TopSection/TopSection';
import HomesGuestloves from '../HomesGuestLoves/HomesGuestLoves';
import Footer from '../Footer/Footer';

const HederPage = () => {
  if (localStorage.getItem('signIn')) {
    return (
      <div>
        <TopSection />
        <HomesGuestloves />
        <Footer />
      </div>
    );
  } else {
    return <Navigate to="/signIn" />;
  }
};

export default HederPage;
