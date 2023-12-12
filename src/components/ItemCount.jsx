import React from "react";

export const ItemCount = ({cantidad, handleRes, handleSum, handleAgregar}) => {

    return(
        <div>
            <div className="item-count">
                <button onClick={handleRes}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSum}>+</button>
            </div>
        </div>
    );
}