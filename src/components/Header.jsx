import React from 'react';
import styles from "./header.module.css"

function Header() {
  return (
    <header className={styles.header}>
    <img className={styles.logo} alt="logoboss" src="https://www.mcdonalds.com/content/dam/se/nfl/Core/Icons/mcd_socialshare_logo.png" />
    <nav className={styles.nav}>
      
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      
    </nav>
  </header>
  )
}

export default Header