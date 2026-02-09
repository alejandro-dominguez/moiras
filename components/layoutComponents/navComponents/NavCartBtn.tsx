'use client';

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
                    className='cursor-pointer mt-1'
                    onClick={() => {onToggle(false)}}
                    aria-label='ir arriba'
                >
                    <IoCartOutline className='block text-3xl' />
                </button>
            </li>
        )
    }

    return (
        <li className='z-50'>
            <Link
                href='/carrito'
                onClick={() => {onToggle(false)}}
            >
                <IoCartOutline className='block text-3xl' />
            </Link>
        </li>
    )
}

export default NavCartBtn;
