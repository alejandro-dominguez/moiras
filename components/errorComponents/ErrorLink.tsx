import scrollToRef from '@/utils/scrollToRef';
import Link from 'next/link';
import { IoArrowBackCircle } from 'react-icons/io5';

const ErrorLink = () => {
    return (
        <Link
            href='/'
            className='rounded-md bg-darker shadow shadow-darker/50
            text-white flex gap-2 py-2 w-35 items-center justify-center'
        >
            <span>
                Inicio
            </span>                    
            <IoArrowBackCircle
                size={30}
                className='block text-lighter drop-shadow-amber-50/15 drop-shadow-xs'
            />
        </Link>
    )
}

export default ErrorLink;
