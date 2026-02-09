'use client';

import Link from 'next/link';
import scrollTop from '@/utils/scrollTop';
import { IoLocationOutline } from 'react-icons/io5';
import { IoCallOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { IoIosArrowDropup } from 'react-icons/io';

const FooterSecondCol = () => {
    return (
        <div>
            <h3 className='font-medium uppercase tracking-wide mb-4'>
                CONTACTO
            </h3>
            <div className='flex flex-col gap-3 text-sm'>
                <Link
                    href='https://wa.me/+5493412820807'
                    referrerPolicy='no-referrer'
                    rel='noopener'  
                    target='_blank'
                    className='flex gap-3 items-center'
                >
                    <div className='grid place-items-center w-5'>
                        <IoCallOutline className='block text-[1.65rem]' />
                    </div>
                    <span>
                        Whatsapp
                    </span>
                </Link>
                <Link
                    href='https://www.instagram.com/las_moiras_rosario'
                    referrerPolicy='no-referrer'
                    rel='noopener'  
                    target='_blank'
                    className='flex gap-2 items-center'
                >
                    <div className='grid place-items-center'>
                        <FaInstagram className='block text-2xl' />
                    </div>
                    <span>
                        las_moiras_rosario
                    </span>
                </Link>
                <div className='flex items-center gap-[.44rem]'>
                    <IoLocationOutline className='block text-[1.75rem] -ml-0.5' />
                    <span>
                        Maipu 842
                        <br />
                        Galeria del Paseo
                    </span>
                </div>
                <div className='flex gap-3 items-center'>
                    <FiMail className='block text-[1.4rem]' />
                    <span className='-ml-0.5'>
                        las_moiras@gmail.com
                    </span>
                </div>
                <IoIosArrowDropup
                    className='block cursor-pointer text-5xl self-center mt-8 md:mt-4'
                    onClick={() => scrollTop()}
                />
            </div>
        </div>
    )
}

export default FooterSecondCol;
