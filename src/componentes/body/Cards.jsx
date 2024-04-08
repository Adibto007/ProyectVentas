import React from "react";
import './card.css'

export default function Cards(props){
    return(
        <>
            <div className="card2">
                <img src={props.items.image} alt="logo" />
                
                <div>
                    <h5>{props.items.title}</h5>
                    <h6 className="precio">{props.items.precio}</h6>
                    <br />
                    <button type="button" className="btn btn-outline-primary">Comprar</button>
                </div>
            </div>
        </>
    )
}