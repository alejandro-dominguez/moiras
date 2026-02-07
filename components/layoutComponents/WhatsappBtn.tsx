import Link from 'next/link';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaCircle } from 'react-icons/fa';

const WhatsappBtn = () => {
    return (
        <div className='fixed bottom-4 md:bottom-26 right-3 md:right-8 z-50'>
            <Link
                href='https://wa.me/+5493412820807'
                referrerPolicy='no-referrer'
                rel='noopener'
                target='_blank'
                className='relative'
            >
                <FaCircle
                    className='absolute inset-1.5 md:inset-[.425rem]
                    text-white text-2xl md:text-3xl'
                />
                <RiWhatsappFill
                    className='relative cursor-pointer text-green-600 text-4xl
                    md:text-[2.75rem] drop-shadow-xs drop-shadow-green-900/50'
                />
            </Link>
        </div>
    )
}

export default WhatsappBtn;
