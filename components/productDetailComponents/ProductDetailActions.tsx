'use client';

import toast from 'react-hot-toast';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import type { Product } from '@/data/products.data';

const ProductDetailActions = ({ product }: { product: Product }) => {
    const { addItem } = useCart()
    const [ qty, setQty ] = useState(1)
    
    const handleAdd = () => {
        for (let i = 0; i < qty; i++) addItem(product)
        toast.success(`¡${qty} Unidad/es Agregadas!`)
        setQty(1)
    }
    
    return (
        <div className='flex flex-col gap-4 items-start mt-5'>
            <div className='flex items-center justify-between w-40'>
                <button
                    onClick={() => setQty(q => Math.max(1, q - 1))}
                    className='cursor-pointer'
                >
                    <IoIosRemoveCircleOutline size={25} />
                </button>
                <span className='text-lg'>
                    {qty}
                </span>
                <button
                    onClick={() => setQty(q => q + 1)}
                    className='cursor-pointer'
                >
                    <IoIosAddCircleOutline size={25} />
                </button>
            </div>
            <button
                onClick={handleAdd}
                className='border px-4 py-2 text-[.85rem] transition-colors
                tracking-wide cursor-pointer hover:bg-slate-950/10'
            >
                Agregar al carrito
            </button>
        </div>
    )
}

export default ProductDetailActions;
