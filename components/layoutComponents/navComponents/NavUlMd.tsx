'use client';

import NavCartBtn from './NavCartBtn';
import NavSearchBar from './NavSearchBar';
import Link from 'next/link';
import { navItems } from '@/constants/navItems';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavUlMd = ({ onToggle }: Props) => {
    return (
        <ul className='flex md:flex-1 gap-6 mt-1.5 ml-0 md:ml-10 items-center'>
            {navItems.map(({ label, href }) => (
                <li key={href} className='uppercase font-semibold hidden md:block'>
                    <Link href={href}>
                        {label}
                    </Link>
                </li>
            ))}
            <div className='hidden md:block'>
                <NavSearchBar onToggle={onToggle} />
            </div>
            <div className='ml-auto z-50'>
                <NavCartBtn onToggle={onToggle} />
            </div>
        </ul>
    )
}

export default NavUlMd;
