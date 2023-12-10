import LocalMallIcon from '@mui/icons-material/LocalMall';
import { IconButton } from '@mui/material';

export const CartWidget = () => {
    return (
       <IconButton>
        <LocalMallIcon /><span>0</span>
       </IconButton>
    )
}