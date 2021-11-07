import React from 'react'
const Bebida = ({bebidaProp}) => {
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
            <p>{bebidaProp.idDrink} - {bebidaProp.strDrink}</p>
        </div>
    );
}

export default Bebida;