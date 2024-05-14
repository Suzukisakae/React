import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* Q: Outlet là dùng để?
      A: Outlet là một component của react-router-dom, nó được sử dụng để render các route con của route cha.
        */}
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          © copyright {new Date().getFullYear()} by Worldwise{" "}
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
