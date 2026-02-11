import Image from 'next/image';
import CheckoutForm from './CheckoutForm';

const CheckoutFormContainer = () => {
    return (
        <div className='relative h-[85vh] sm:h-[90vh] grid place-items-center'>
            <Image
                src='https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9'
                className='w-full h-full object-cover object-center'
                fill
                alt='asdas'
            />            
            <div className='relative z-10 py-5 px-10 bg-[#fffefe] shadow-sm'>
                <h2 className='font-abrli-fatface text-2xl md:text-3xl mb-5 mt-1'>
                    CHECKOUT
                </h2>
                <CheckoutForm />
            </div>
        </div>
    )
}

export default CheckoutFormContainer;
