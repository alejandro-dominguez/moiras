'use client';

import numberFormater from '@/utils/numberFormater';
import { useCart } from '@/context/CartContext';

const CheckoutFormTotal = () => {
    const { totalPrice } = useCart()
    
    return (
        <p className='mt-5'>
            Total a pagar:
            <br />
            {numberFormater(totalPrice)}
        </p>
    )
}

export default CheckoutFormTotal;
