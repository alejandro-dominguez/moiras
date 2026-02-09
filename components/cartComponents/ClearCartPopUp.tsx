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
                className='p-5 max-w-sm shadow-lg bg-[#fffefe]'
                onClick={e => e.stopPropagation()}
            >
                <h3 className='text-lg font-semibold mb-1 -mt-1'>
                    Vaciar carrito
                </h3>
                <p className='text-[.95rem] mb-6'>
                    ¿Seguro que deseas vaciar tu carrito?
                </p>
                <div className='flex justify-between'>
                    <button
                        onClick={onConfirm}
                        className='px-6 py-2 bg-red-600/90 cursor-pointer text-white font-medium'
                    >
                        Vaciar
                    </button>
                    <button
                        onClick={onCancel}
                        className='px-4 py-2 border cursor-pointer'
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ClearCartPopUp;
