'use client';

import NoCartItemsCard from '@/components/cartComponents/NoCartItemsCard';
import CheckoutFormContainer from '@/components/checkoutComponents/CheckoutFormContainer';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
    const { items } = useCart()

    return (
        items.length === 0 ?
            <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5'>
                <NoCartItemsCard />
            </section>
        :
            <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5 min-h-svh'>
                <CheckoutFormContainer />
            </section>
    )
}

export default Checkout;
