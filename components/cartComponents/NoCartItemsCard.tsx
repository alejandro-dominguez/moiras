import logo from '@/public/logo-2.png';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const NoCartItemsCard = () => {
    return (
        <Link
            href='/tienda'
            className='px-12 md:px-20 py-5 md:py-4 rounded-md mt-5 flex w-fit mx-auto'
        >
            <div className='flex flex-col items-center gap-4 tracking-tight'>
                <h1 className='text-center font-medium text-lg grid place-items-center leading-7'>
                    <span>
                        Aún no hay productos
                    </span>
                    <div className='flex items-center justify-center gap-2'>
                        <span>
                            en el carrito
                        </span>
                        <IoArrowBackCircleOutline
                            size={30}
                            className='block'
                        />
                    </div>
                </h1>
                <div className='w-48'>
                    <Image
                        src={logo}
                        alt='Logo Moiras'
                    />
                </div>
            </div>
        </Link>
    )
}

export default NoCartItemsCard;
