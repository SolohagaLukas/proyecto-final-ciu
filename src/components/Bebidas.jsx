import React from 'react'
const Bebida = ({bebidasProp}) => {
    return (
        <div
            style={
                {
                    margin:"1rem",
                    padding:"3rem",
                    borderRadius:"9rem",
                    backgroundColor:"#ffffff",
                    maxWidth:"800px",
                    color:"black",
                    textEmphasisColor:"black"
                }
            }>
            <div className="table-responsive">
                <table className="table table-sm table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Alcoholic</th>
                        <th>Glass</th>
                        <th>Image</th>
                    </tr>
                    </thead>

            <tbody>
              {bebidasProp && 
              bebidasProp.map((bebida)=>(
                <tr key={bebida.idDrink}>
                  <td>{bebida.idDrink}</td>
                  <td>{bebida.strDrink}</td>
                  <td>{bebida.strCategory}</td>
                  <td>{bebida.strAlcoholic}</td>
                  <td>{bebida.strGlass}</td>
                  <img className="table-img" src={bebida.strDrinkThumb}></img>
                </tr>
                ))}
                </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default Bebida;