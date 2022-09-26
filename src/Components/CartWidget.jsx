import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext)
return(
    <IconButton aria-label="cart">
        <Badge badgeContent={test.totalItems} color="secondary">
            <ShoppingCartIcon color='primary'/>
        </Badge>
    </IconButton>
)}

export default CartWidget;