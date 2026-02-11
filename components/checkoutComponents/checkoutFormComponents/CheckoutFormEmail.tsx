
const CheckoutFormEmail = () => {
    return (
        <div className='flex flex-col mt-1'>
            <label className='font-medium'>
                Email
            </label>
            <input
                type='email'
                placeholder='Dirección de correo'
                className='border-b border-main mt-1 pb-1 text-slate-700 placeholder:text-slate-400'
            />
        </div>
    )
}

export default CheckoutFormEmail;
