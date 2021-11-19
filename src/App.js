import { Fragment, useState } from 'react';
import './App.css';
import Bebida from './components/Bebida';
import Bebidas from './components/Bebidas';
import Ingrediente from './components/Ingrediente';
import BebidaPopular from './components/BebidaPopular';
import imagen from './image/cocktail.png';
import separador from './image/separador.jpg';

function App() {
  
  //Creamos un State para las bebidas, arranca vacio
  //Las bebidas van a venir en formato json
  const [bebida, setBebida] = useState({});
  const [bebidas, setBebidas] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [ingrediente, setIngrediente] = useState({});
  const [bebidaPopular, setBebidaPopular] = useState({});

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

  const buscarPorNombre = async (nombre) => {
    try{
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nombre);
      const bebidas = await api.json();
      setBebidas(bebidas.drinks);
    } catch (error) {
      console.log(error)
    }
  }

  const buscarBebidasCon = async (letra) => {
    try{
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letra);
      const bebidas = await api.json();
      setBebidas(bebidas.drinks);
    } catch (error) {
      console.log(error)
    }
  }   

  const traerIngrediente = async (ing) => {
    try{
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ing);
      const ingrediente = await api.json();
      setIngrediente(ingrediente.ingredients[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const traerBebidaPopular = async (id) => {
    try{
      const api = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
      const bebida = await api.json();
      setBebidaPopular(bebida.drinks[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    //console.log("Busqueda: "+e.target.value); //Devuelve por consola el valor de la busqueda
    buscarPorNombre(e.target.value.toString().toLowerCase())
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
  
        <div className="center">
          <table className="tabla-bienvenida">
            <tbody>
              <tr>
                <td><img src={imagen} className="imagen-bienvenida"></img></td>
                <td><h1>Bienvenido a nuesta página</h1>
                Le ofecemos todas las bebidas y tragos del mundo.
                Esperamos que la experiencia sea de su agrado!</td>
                <td><img src={imagen} className="imagen-bienvenida"></img></td>
              </tr>
            </tbody>
          </table>

        </div>

        <img src={separador} className="separador"></img><br></br>
        <h3>Bebidas Populares</h3><br></br>
        <div className="center">    
          <div className="row">
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11000')}>
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg"></img> Mojito
              </a><br></br><br></br>
            </div>
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11001')}>          
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg"></img> Old Fashioned
              </a><br></br><br></br>
            </div>
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11002')}>
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg"></img> Long Island Tea
              </a>
              <br></br><br></br>
            </div>
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11003')}> 
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"></img> Negroni
              </a>
              <br></br><br></br>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11004')}>
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg"></img> Whiskey Sour
              </a><br></br><br></br>
            </div>
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11005')}>
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg"></img> Dry Martini
              </a><br></br><br></br>
            </div>
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11006')}>
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg"></img> Daiquiri
              </a><br></br><br></br>
            </div>
            <div className="col-sm-3">
              <a onClick={() => traerBebidaPopular('11007')}>
                <img className="populares" src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"></img> Margarita
              </a><br></br><br></br>
            </div>
          </div>
        </div>
        <BebidaPopular bebidaPopularProp={bebidaPopular}/><br></br>
        <img src={separador} className="separador"></img><br></br>

        <button
          className="btn btn-outline-light"
          onClick={consultarAPI}>
          Traer bebida aleatoria
        </button>
        <br></br>
        <Bebida bebidaProp={bebida}/>
        <img src={separador} className="separador"></img><br></br>

        <h3>Ingredientes Populares</h3><br></br>
        <div className="row">
          <div className="col-sm-3">
            <a> <img src="https://www.thecocktaildb.com/images/ingredients/vodka.png" className="btn ingrediente" onClick={() => traerIngrediente('vodka')}></img> Vodka </a>
          </div>
          <div className="col-sm-3">
            <a> <img src="https://www.thecocktaildb.com/images/ingredients/gin.png" className="btn ingrediente" onClick={() => traerIngrediente('Gin')}></img> Gin </a>
          </div>
          <div className="col-sm-3">
            <a> <img src="https://www.thecocktaildb.com/images/ingredients/rum.png" className="btn ingrediente" onClick={() => traerIngrediente('rum')}></img> Rum </a>
          </div>
          <div className="col-sm-3">
            <a>
              <img src="https://www.thecocktaildb.com/images/ingredients/tequila.png" className="btn ingrediente" onClick={() => traerIngrediente('tequila')}></img> Tequila
            </a>
          </div>
        </div><br></br>  
        <Ingrediente ingredienteProp={ingrediente}/>
        <img src={separador} className="separador"></img><br></br>
        
        {/*Barra de busqueda*/}
        <div className="input-group">
          <input onChange={handleChange} value={busqueda} type="text" name="s" className="form-control" autoComplete="off" placeholder="Busque un Cóctel..."></input>
          <button type="submit" className="btn btn-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div><br></br><br></br>    

        <Bebidas bebidasProp={bebidas}/>
        <img src={separador} className="separador"></img><br></br><br></br>
        <h3>Buscar Bebidas por Indice</h3>
        <div>
          <h4>
            <a className="diccionario btn btn-outline-light btn-lg" onClick={() => buscarBebidasCon('A')}>A</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('B')}>B</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('C')}>C</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('D')}>D</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('E')}>E</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('F')}>F</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('G')}>G</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('H')}>H</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('I')}>I</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('J')}>J</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('K')}>K</a>/                                             
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('L')}>L</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('M')}>M</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('N')}>N</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('O')}>O</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('P')}>P</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('Q')}>Q</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('R')}>R</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('S')}>S</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('T')}>T</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('U')}>U</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('V')}>V</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('W')}>W</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('X')}>X</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('Y')}>Y</a>/
            <a className="diccionario btn btn-outline-light" onClick={() => buscarBebidasCon('Z')}>Z</a>
          </h4>
        </div>
    
      </div>
    </Fragment>
  );
}

export default App;
