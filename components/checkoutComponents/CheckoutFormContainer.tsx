import CheckoutForm from './CheckoutForm';

const CheckoutFormContainer = () => {
    return (
        <div
            className='relative grid place-items-center w-full
            h-127 bg-dark rounded shadow shadow-darker/50'
            style={{ backgroundImage: `url('https://i.ibb.co/FLbXtvcV/fondo-contacto.png')` }}
        >
        <div className='absolute inset-0 bg-dark/50 rounded' />
            <div
                className='relative z-10 bg-white shadow-lg
                shadow-darker/50 py-5 px-8 sm:px-20 rounded'
            >
                <h2 className='text-2xl font-extrabold mb-2 text-main leading-tight'>
                    Checkout
                </h2>
                <CheckoutForm />
            </div>
        </div>
    )
}

export default CheckoutFormContainer;
