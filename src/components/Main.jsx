import React from 'react';
import styles from "./main.module.css"

function Main() {
  return (
    <main className={styles.main}>
    <h1>Favoritisar</h1>
    <ul>
      <li>Körv unt breit</li>
      <li>Nudlar</li>
      <li>Lasse</li>
      <li>Makaroner</li>
      <li>Starköll</li>
    </ul>
  </main>
  )
}

export default Main;