
const CheckoutFormPhone = () => {
    return (
        <div className='flex flex-col mt-1'>
            <label className='flex gap-1 font-medium'>
                Teléfono
                <span className='text-red-500'>
                    *
                </span>
            </label>
            <input
                required
                type='tel'
                placeholder='Número de contacto'
                className='border-b border-main mt-1 pb-1 text-slate-700 placeholder:text-slate-400'
            />
        </div>
    )
}

export default CheckoutFormPhone;
