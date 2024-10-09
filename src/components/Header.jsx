import styles from "./Header.module.css";

import primeLogo from "../assets/prime-logo.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={primeLogo} alt="Logotipo do prime" />
    </header>
  );
};
