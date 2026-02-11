'use client';

import CheckoutSubmitBtn from './checkoutFormComponents/CheckoutSubmitBtn';
import CheckoutFormTotal from './checkoutFormComponents/CheckoutFormTotal';
import CheckoutFormName from './checkoutFormComponents/CheckoutFormName';
import CheckoutFormAdress from './checkoutFormComponents/CheckoutFormAdress';
import CheckoutFormPhone from './checkoutFormComponents/CheckoutFormPhone';
import CheckoutFormEmail from './checkoutFormComponents/CheckoutFormEmail';
import toast from 'react-hot-toast';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const CheckoutForm = () => {
    const { clearCart } = useCart()
    const router = useRouter()

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        clearCart()
        toast.success('¡Compra Exitosa!')
        setTimeout(() => {
            router.push('/')
        }, 2500)
    }

    return (
        <form onSubmit={submit} className='flex flex-col px-12'>
            <div className='flex flex-col gap-2'>
                <CheckoutFormName />
                <CheckoutFormAdress />
                <CheckoutFormPhone />
                <CheckoutFormEmail />
            </div>
            <CheckoutFormTotal />
            <CheckoutSubmitBtn />
        </form>
    )
}

export default CheckoutForm;
