import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { useContext } from "react";
import Container from 'react-bootstrap/Container';

import { CartContext } from "../contexts/CartCotext";
import { ItemCount } from "./ItemCount";

export const Cart = (item) => {
    const { items, clear } = useContext(CartContext);

    return <Container>
        <h2>Mi carrito</h2>
        <Stack direction="row" spacing={2}>
            <Button onClick={clear} variant="outlined" startIcon={<DeleteIcon />}>
                Vaciar carrito
            </Button>
        </Stack>
        {items.map((item) => (
            <div className="producto-seleccionado" key={item.id}>
                <div>
                    <img src={item.imgUrl} width={250} />
                </div>
                <h5>{item.title}</h5>
                <h7>Stock:{item.stock}</h7>
                <ItemCount></ItemCount>
                <p>{item.price}</p>
            </div>

        ))}
    </Container>;
};