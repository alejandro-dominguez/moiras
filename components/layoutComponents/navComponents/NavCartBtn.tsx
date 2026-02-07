'use client';

import scrollToRef from '@/utils/scrollToRef';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavCartBtn = ({ onToggle }: Props) => {
    const pathname = usePathname()
    const isCart = pathname.includes('/carrito')

    if (isCart) {
        return (
            <li className='z-50'>
                <button
                    className='cursor-pointer'
                    onClick={() => {scrollToRef('scroll-y-Body', 0), onToggle(false)}}
                    aria-label='ir arriba'
                >
                    <IoCartOutline className='block text-3xl' />
                </button>
            </li>
        )
    }

    return (
        <li className='z-50'>
            <Link href='/carrito'>
                <IoCartOutline className='block text-3xl' />
            </Link>
        </li>
    )
}

export default NavCartBtn;
