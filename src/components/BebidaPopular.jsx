import React from 'react'
const BebidaPopular = ({bebidaPopularProp}) => {
    return (
        <div
            style={
                {
                    margin:"1rem",
                    padding:"3rem",
                    borderRadius:"7rem",
                    backgroundColor:"#ffffff",
                    maxWidth:"800px",
                    color:"black",
                    textEmphasisColor:"black"
                }
            }>
            <p>{bebidaPopularProp.idDrink} - {bebidaPopularProp.strDrink}</p>
            <p>Instrucciones: {bebidaPopularProp.strInstructions}</p>
            <p>Vaso: {bebidaPopularProp.strGlass}</p>
        </div>
    );
}

export default BebidaPopular;