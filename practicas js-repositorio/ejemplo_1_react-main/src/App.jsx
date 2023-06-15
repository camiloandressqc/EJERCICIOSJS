import { useState } from "react";
import img from "./assets/imgs/igor.jpg";
import About from "./assets/componentes/about/about";
import Contador from "./assets/componentes/contador/contador";
import CosumoApi from "./assets/componentes/fetch/fetch";

import { Children } from "react";

import "./App.css";

function UserName(props) {
  console.log(props);

  return (
    <>
      <div
        style={{
          backgroundColor: props.color,
          fontFamily: props.fuente,
        }}
      >
        <h2>Nombre: {props.nombre} </h2>
        <p>Descripción: {props.descripcion}</p>
        <p>Vivienda: {props.vivienda} </p>
        <img src={props.url} alt="" />
      </div>
    </>
  );
}

function Counter() {

  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={sumar}>Add</button>
    </div>
  );
}

function Page({ children }) {
  return 
    <>
      {children}
    </>
}

function App() {
  return (
    <>
      <header className="mainContainer">
        <h1>Video-juegos</h1>
        <img src={img} alt="" width="300px" height="200px" />
        <nav>
          <p className="navItem">Inicio</p>
          <p className="navItem">Consolas</p>
          <p className="navItem">Juegos</p>
          <p className="navItem">Contactanos</p>
        </nav>
      </header>
      
      {/* <UserName nombre="Diego" descripcion= "Desarrollador Web BackEnd" vivienda = "Cartagena - Colombia" color="red" url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"/>
      <UserName nombre="Alejandro" descripcion= "Desarrollador Web FullStack" vivienda = "Bogotá - Colombia" color="blue"/>
      <UserName nombre="Luis" descripcion= "Plomero" vivienda = "Alaska" color="green" fuente="Courier New"/> */}

      {/* ============= Childrens ================= */}


      {/* Childrens => Convertir un componente en un contenedor, que contiene otros componentes */}


        <About>
          <h2> * Estos son Childrens *</h2>

          <ul>
            <li>
              <p> Gears Of War </p>
            </li>
            <li>
              <p> War Craft </p>
            </li>
            <li>
              <p> Over Watch 2 </p>
            </li>
            <li>
              <p> Age of empires </p>
            </li>
          </ul>
        </About>

        <Counter/>



      {/* ============= useEffect  ================= */}

      <h2> * useEffect * </h2>

      <Contador></Contador>

      <CosumoApi/>
    </>
  );
}

export default App;
