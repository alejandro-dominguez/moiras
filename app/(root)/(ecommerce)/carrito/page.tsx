'use client';

import NoCartItemsCard from '@/components/cartComponents/NoCartItemsCard';
import CartItemCard from '@/components/cartComponents/CartItemCard';
import CartTotal from '@/components/cartComponents/CartTotal';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
    const { items } = useCart()

    return (
        items.length === 0 ?
            <section className='min-h-svh'>
                <NoCartItemsCard />
            </section>
        :
            <section className='min-h-svh mt-2'>
                <h1 className='font-abrli-fatface text-2xl md:text-3xl mb-3'>
                    MI CARRITO
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    <div className='lg:col-span-2 space-y-4'>
                        {items.map(item => (
                            <CartItemCard key={item.id} item={item} />
                        ))}
                    </div>
                    <CartTotal />
                </div>
            </section>
    )
}

export default CartPage;
