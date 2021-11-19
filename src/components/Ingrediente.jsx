import React from 'react'
const Ingrediente = ({ingredienteProp}) => {
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
            <h4>{ingredienteProp.idIngredient} - {ingredienteProp.strIngredient}</h4>
            <h4>Descripcion</h4>
            <p>{ingredienteProp.strDescription}</p>
        </div>
    );
}

export default Ingrediente;