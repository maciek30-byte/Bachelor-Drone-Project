import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li className={styles.menuItem}>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/drones" className={styles.link}>
            Drones
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/missions" className={styles.link}>
            Missions
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/settings" className={styles.link}>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
