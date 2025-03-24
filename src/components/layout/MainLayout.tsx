import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const MainLayout: React.FC = () => {
  return (
    <section id="container">
      <Header />
      <Sidebar />
      <MainContent />
    </section>
  );
};

export default MainLayout;
