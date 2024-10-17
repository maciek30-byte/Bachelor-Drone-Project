import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.css';
import AppRoutes from '../../routes/AppRoutes';

const Layout = () => {
  return (
    <Router>
      <div className={styles.layout}>
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <main className={styles.main}>
            <AppRoutes />
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
