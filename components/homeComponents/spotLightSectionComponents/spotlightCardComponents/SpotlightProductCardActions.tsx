'use client';

import toast from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products.data';

type Props = {
    product: Product
}

const SpotlightProductCardActions = ({ product }: Props) => {
    const { addItem } = useCart()

    const handleAdd = () => {
        addItem(product)
        toast.success('¡Producto Agregado!')
    }

    return (
        <button
            className='border w-57 md:w-50 lg:w-70 py-2 md:px-0 text-[.85rem] mt-3
            transition-colors tracking-wide hover:bg-slate-950/10 cursor-pointer'
            onClick={handleAdd}
        >
            Agregar 
        </button>
    )
}

export default SpotlightProductCardActions;
