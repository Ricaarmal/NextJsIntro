import React from "react";
import Navbar from "./Components/Navbar/Navbar";

const About = () => {
    return (
    <div>
        <Navbar />
        <p>Esta es la pagina de about</p>
    </div>
    
    )
};

export default About;

//En este primer ejemplo encontramos un routing basado en File System
//Si deseamos una pagina llamada productos, solo hay que crear su archivo correspondiente
// Como el caso especifico actual: para la pagina about tenemos este archivo about.
//Cualidad especifica de NextJs