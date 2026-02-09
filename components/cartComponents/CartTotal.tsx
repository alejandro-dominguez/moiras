'use client';

import numberFormater from '@/utils/numberFormater';
import ClearCartPopUp from './ClearCartPopUp';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const CartTotal = () => {
    const { totalPrice, clearCart } = useCart()
    const [ showConfirm, setShowConfirm ] = useState(false)

    const handleConfirmClear = () => {
        clearCart()
        setShowConfirm(false)
    }

    return (
        <>
        <div className='mt-5 lg:mt-0'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-semibold'>
                    Total:
                </h3>
                <span className='font-medium tracking-tight'>
                    {numberFormater(totalPrice)}
                </span>
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <Link
                    href='/checkout'
                    className='mt-7 text-center py-3 border font-medium
                    transition-colors cursor-pointer hover:bg-slate-950/10'
                >
                    Proceder al pago
                </Link>
                <button
                    onClick={() => setShowConfirm(true)}
                    className='mt-7 w-full text-center py-3 border text-[.95rem] font-medium
                    transition-colors cursor-pointer hover:bg-slate-950/10'
                >
                    Vaciar carrito
                </button>
            </div>
        </div>
        {showConfirm && (
            <ClearCartPopUp
                onConfirm={handleConfirmClear}
                onCancel={() => setShowConfirm(false)}
            />
        )}
        </>
    )
}

export default CartTotal;
