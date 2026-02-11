import CheckoutForm from './CheckoutForm';

const CheckoutFormContainer = () => {
    return (
        <div className='grid place-items-center border w-fit mx-auto py-5 px-10'>
            <h2 className='font-abrli-fatface text-2xl md:text-3xl mb-5'>
                CHECKOUT
            </h2>
            <CheckoutForm />
        </div>
    )
}

export default CheckoutFormContainer;
