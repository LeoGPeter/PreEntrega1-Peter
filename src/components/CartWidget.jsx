import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { IconButton } from '@mui/material';

export const CartWidget = () => {
    return (
        <Link to="/cart">
            <IconButton>
                <LocalMallIcon /><span>0</span>
            </IconButton>
       </Link>
    )
}