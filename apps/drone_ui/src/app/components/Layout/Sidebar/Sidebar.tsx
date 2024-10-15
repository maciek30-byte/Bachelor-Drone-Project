import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li className={styles.menuItem}><a href="/" className={styles.link}>Dashboard</a></li>
        <li className={styles.menuItem}><a href="/drones" className={styles.link}>Drones</a></li>
        <li className={styles.menuItem}><a href="/missions" className={styles.link}>Missions</a></li>
        <li className={styles.menuItem}><a href="/settings" className={styles.link}>Settings</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
