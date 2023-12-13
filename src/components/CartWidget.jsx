import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { IconButton } from '@mui/material';
import { CartContext } from '../contexts/CartCotext';
import { useContext } from 'react';

export const CartWidget = () => {
    const { items } = useContext(CartContext);

    const total = items.reduce((acumulador, actual) => acumulador + actual.quantity, 0)

    return (
        <Link to="/cart">
            <IconButton>
                <LocalMallIcon /><span>{total}</span>
            </IconButton>
        </Link>
    )
}