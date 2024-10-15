import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Sidebar.module.css';
import { setActiveComponent } from '../../../store/features/navigation/navigationSlice';
import type { ActiveComponentType } from '../../../store/features/navigation/navigationSlice';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();

  const handleNavigation = (component: ActiveComponentType) => {
    dispatch(setActiveComponent(component));
  };

  return (
    <nav className={styles.sidebar}>
      <ul>
        <li className={styles.menuItem}>
          <button onClick={() => handleNavigation('Dashboard')} className={styles.link}>
            Dashboard
          </button>
        </li>
        <li className={styles.menuItem}>
          <button onClick={() => handleNavigation('Drones')} className={styles.link}>
            Drones
          </button>
        </li>
        <li className={styles.menuItem}>
          <button onClick={() => handleNavigation('Missions')} className={styles.link}>
            Missions
          </button>
        </li>
        <li className={styles.menuItem}>
          <button onClick={() => handleNavigation('Settings')} className={styles.link}>
            Settings
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;