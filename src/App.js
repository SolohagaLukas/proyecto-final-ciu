import { Fragment, useState } from 'react';
import './App.css';
import Bebida from './components/Bebida';
import images from './image/images.jpg';

function App() {
  
  //Creamos un State para las bebidas, arranca vacio
  //Las bebidas van a venir en formato json
  const[bebida,setBebida] = useState({});

  //Consultar la API y obtener el resultado
  const consultarAPI = async () => {
    try{
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const bebida = await api.json();
      setBebida(bebida.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <div style={
        {
          padding:"100px",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }
      }>
        <div className="row">
          <div className="col-lg-4">
            <img src={images}></img>
          </div>
          <div className="col-lg-4">
            <img src={images}></img>
          </div>
          <div className="col-lg-4">
            <img src={images}></img>
          </div>
        </div>
        <br></br>
        <button
          className="btn btn-outline-light"
          onClick={consultarAPI}>
          Traer bebida
        </button>
        <br></br>
        <Bebida bebidaProp={bebida}/>
      </div>
    </Fragment>
  );
}

export default App;
