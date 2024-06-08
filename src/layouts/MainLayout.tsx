import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';
import Footer from '../components/footer';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
