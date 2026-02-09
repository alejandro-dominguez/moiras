'use client';

import { useCart } from '@/context/CartContext';
import { IoTrashBinOutline } from 'react-icons/io5';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';

const CartItemActions = ({ quantity, id }: { quantity: number; id: number }) => {
    const { increaseQty, decreaseQty, removeProduct } = useCart()

    return (
        <div className='flex items-baseline mt-4 sm:mt-5 gap-10'>
            <div className='flex items-center gap-2'>
                <button
                    onClick={() => decreaseQty(id)}
                    className='cursor-pointer'
                >
                    <IoIosRemoveCircleOutline className='block' size={25} />
                </button>
                <span className='font-medium text-lg w-6 text-center'>
                    {quantity}
                </span>
                <button
                    onClick={() => increaseQty(id)}
                    className='cursor-pointer'
                >
                    <IoIosAddCircleOutline className='block' size={25} />
                </button>
            </div>
            <button
                onClick={() => removeProduct(id)}
                className='cursor-pointer'
            >
                <IoTrashBinOutline size={23.8} />
            </button>
        </div>
    )
}

export default CartItemActions;
