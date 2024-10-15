import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Dashboard } from '../../pages/Dashboard';
import { Drones } from '../../pages/Drones';
import { Missions } from '../../pages/Missions';
import { Settings } from '../../pages/Settings';
import { ActiveComponentType } from '../../store/features/navigation/navigationSlice';
interface LayoutProps {
  children: React.ReactNode;
}

//@TODO think about better solution after finish MVP//
//@TODO Performance optimization when content is changed//
const componentMap: Record<ActiveComponentType, React.ComponentType> = {
  Dashboard: Dashboard,
  Drones: Drones,
  Missions: Missions,
  Settings: Settings,
};

const Layout: React.FC<LayoutProps> = () => {
  const activeComponentName = useSelector((state: RootState) => state.navigation.activeComponent);
  const ActiveComponent = componentMap[activeComponentName];

  console.log("this is active component name", activeComponentName);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <ActiveComponent />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
