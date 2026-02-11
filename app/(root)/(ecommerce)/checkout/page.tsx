'use client';

import NoCartItemsCard from '@/components/cartComponents/NoCartItemsCard';
import CheckoutFormContainer from '@/components/checkoutComponents/CheckoutFormContainer';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
    const { items } = useCart()

    return (
        items.length === 0 ?
            <section className='min-h-svh'>
                <NoCartItemsCard />
            </section>
        :
            <section className='min-h-svh mt-2'>
                <CheckoutFormContainer />
            </section>
    )
}

export default Checkout;
