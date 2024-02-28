//import { useState } from 'react'
import styles from "./App.module.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from "../src/Components/Hero/Hero"
import { Experience } from "./Components/Experience/Experience";
import { Projets } from "./Components/Projets/Projets";
import { HardSkill } from "./Components/HardSkill/HardSkill";
import { SoftSkill } from "./Components/SoftSkill/SoftSkill";
import { Loisir } from "./Components/Loisir/Loisir";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import Popup from "./Components/Popup";

function App() {

  return (
    
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Experience />
      <Projets/>
      <HardSkill />
      <SoftSkill />
      <Loisir />
      <Contact />
      <Footer />

    <Popup trigger = {false}> <h3> La maison est grande</h3></Popup>
    </div>

  )
}

export default App;
