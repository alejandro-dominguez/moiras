'use client';

type Props = {
    onConfirm: () => void
    onCancel: () => void
}

const ClearCartPopUp = ({ onConfirm, onCancel }: Props) => {
    return (
        <div
            className='fixed inset-0 z-50 grid place-items-center bg-black/60'
            onClick={onCancel}
        >
            <div
                className='p-5 shadow-lg bg-[#fffefe]'
                onClick={e => e.stopPropagation()}
            >
                <h3 className='text-lg font-semibold mb-1 -mt-1'>
                    Vaciar carrito
                </h3>
                <p className='text-[.95rem] mb-6'>
                    ¿Seguro que deseas vaciar tu carrito?
                </p>
                <div className='flex w-full justify-between'>
                    <button
                        className='px-8 py-2 bg-red-600/90 cursor-pointer text-white font-medium'
                        onClick={onConfirm}
                    >
                        Vaciar
                    </button>
                    <button
                        className='px-6 py-2 border cursor-pointer'
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClearCartPopUp;
