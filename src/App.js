import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
/**
 * 
 * Utmaning 1:
 * Skapa en typisk sid-layout med följande:
 * 
 * En <header> som innehåller en bild på vänstersidan
 * samt en navigation-bar med <nav> på högersidan med ett gäng länkar
 * 
 * En <main> som innehåller en titel och en lista på
 * exempelvis 5 favoriträtter
 * 
 * Slutligen en <footer> som innehåller en text, 
 * förslagsvis "© ÅR - DITT NAMN"
 * 
 * Styling är helt valfritt.
 * Det finns exempel på styling under 4-feb/examples/styling-using-***
 */

/**
 * 
 * Utmaning 2:
 * Bryt ut de tre beståndsdelarna till egna komponenter:
 * 
 * Börja med att skapa en mapp som heter components
 * 
 * Därefter vill du skapa egna komponenter för de tre beståndsdelarna
 * inuti components-mappen
 * 
 * Bryt sedan ut var del in i sin egen komponent/fil och 
 * importera dessa i denna filen
 * 
 * Därefter placerar du dessa inuti din App-komponent nedan
 */
const today = new Date();

function App() {
  return (
    <div>

      <Header />

      <Main />
      
      {/* <footer name="Joakim Melén" year={today.getFullYear()} /> */}

    </div>
  );
  }

export default App;
