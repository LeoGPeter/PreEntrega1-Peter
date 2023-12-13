import React from "react";
import { useState } from "react";
import { Button } from '@mui/material';

export const ItemCount = ({ item, addItem, }) => {

    const [cantidad, setCantidad] = useState(1);

    const handleRes = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSum = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleAdd = () => {
        addItem(cantidad);
        setCantidad(1)
    }

    return (
        <div>
            <div className="item-count">
                <i className="count" onClick={handleRes}>–</i>
                <p>{cantidad}</p>
                <i className="count" onClick={handleSum}>+</i>
            </div>
            <div>
                <Button onClick={handleAdd} size="small" color="primary">
                    Agregar al carrito
                </Button>
            </div>
        </div>
    );
}