'use client';

import toast from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products.data';

type Props = {
    product: Product
}

const BestSellersCardActions = ({ product }: Props) => {
    const { addItem } = useCart()

    const handleAdd = () => {
        addItem(product)
        toast.success('¡Producto Agregado!')
    }

    return (
        <button
            className='border px-4 py-2 text-[.85rem] mt-3 mb-3 lg:mb-0
            transition-colors tracking-wide cursor-pointer hover:bg-slate-950/10'
            onClick={handleAdd}
        >
            Agregar
        </button>
    )
}

export default BestSellersCardActions;
