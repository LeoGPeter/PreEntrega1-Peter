import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { useContext, useState } from "react";
import Container from 'react-bootstrap/Container';
import { getFirestore, addDoc, collection } from "firebase/firestore";

import { CartContext } from "../contexts/CartCotext";

const clearBuyer = { name: "", phone: "", email: "" };

export const Cart = (item) => {
    const { items, clear, removeItem } = useContext(CartContext);
    const [buyer, setBuyer] = useState(clearBuyer);

    const total = items.reduce((acumulado, actual) => {
        return acumulado + actual.price * actual.quantity;
    }, 0)

    const handleSendOrder = () => {
        const order = { buyer, items, total }

        const db = getFirestore();

        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + "ha sido completada!");
            }
        }).finally(() => { setBuyer(clearBuyer), clear() });
    };

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        setBuyer((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    return <Container>
        <div className="carrito">
            <h2>Mi carrito</h2>
            <Stack direction="row" spacing={2}>
                <Button className="vaciar-carrito" onClick={clear} variant="outlined" startIcon={<DeleteIcon />}>
                    Vaciar carrito
                </Button>
            </Stack>
        </div>
        <div>
            {items.map((item) => (
                <div className="producto-seleccionado" key={item.id}>
                    <div>
                        <img src={item.imgUrl} alt={item.title} width={250} />
                    </div>
                    <div>
                        <h5>{item.title}</h5>
                    </div>
                    <div>
                        <h5>Cantidad: {item.quantity}</h5>
                    </div>
                    <div>
                        <h6>$ {item.price}</h6>
                    </div>
                    <IconButton onClick={() => removeItem(item.id)} aria-label="delete" size="large">
                        <DeleteIcon />
                    </IconButton>
                </div>
            ))}
        </div>

        <div className="formulario">
            <div className="form">
                <div className="formu">
                    <div>
                        <label>Nombre</label>
                        <input type="text" value={buyer.name} onChange={handleChange} required name="name" />
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input type="text" value={buyer.phone} onChange={handleChange} required name="phone" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={buyer.email} onChange={handleChange} required name="email" />
                    </div>
                </div>

                <div className="total">
                    <h5>Total: ${total}</h5>
                </div>
                <div>
                    <Button type="button" onClick={handleSendOrder}>Finalizar compra</Button>
                </div>
            </div>
        </div>
    </Container>;
};