'use client';

import numberFormater from '@/utils/numberFormater';
import CartItemImg from './cartItemCardComponents/CartItemImg';
import CartItemActions from './cartItemCardComponents/CartItemActions';
import { type CartItem } from '@/context/CartContext';

const CartItemCard = ({ item }: { item: CartItem }) => {
    const { image, title, price, quantity, id, slug } = item

    return (
        <div className='py-2 flex flex-col gap-3 sm:flex-row sm:gap-4'>
            <CartItemImg slug={slug} image={image} title={title} />
            <div className='flex-1 flex flex-col'>
                <h3 className='font-medium'>
                    {title}
                </h3>
                <p className='text-sm mt-1'>
                    {numberFormater(price)}
                </p>
                <CartItemActions quantity={quantity} id={id} />
            </div>
        </div>
    )
}

export default CartItemCard;
