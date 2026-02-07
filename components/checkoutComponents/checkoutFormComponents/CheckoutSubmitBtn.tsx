'use client';

const CheckoutSubmitBtn = () => {
    return (
        <button
            type='submit'
            className='bg-lighter hover:bg-main text-white text-sm font-semibold
            px-6 py-[.675rem] transition-colors cursor-pointer rounded-3xl tracking-wide
            text-shadow text-shadow-darker shadow shadow-darker/50 mt-4 uppercase'
        >
            CONFIRMAR COMPRA
        </button>
    )
}

export default CheckoutSubmitBtn;
