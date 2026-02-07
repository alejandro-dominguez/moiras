'use client';

import NavMenuBtn from './NavMenuBtn';
import Link from 'next/link';
import NavSearchBar from './NavSearchBar';
import { navItems } from '@/constants/navItems';

interface Props {
    isVisible: boolean
    onToggle: (newValue: boolean) => void
}

const NavUl = ({ isVisible, onToggle }: Props) => {
    return (
        <div className='md:hidden'>
            <NavMenuBtn isVisible={isVisible} onToggle={onToggle} />
            <div
                className={`absolute inset-0 z-40 transition-transform duration-250
                ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className='pt-14'>
                    <ul
                        className='bg-[#fffefe] grid grid-cols-2 place-items-center
                        -mt-14 pt-20 pb-5 px-10 shadow-md shadow-black/15'
                    >
                        {navItems.map(({ label, href }) => (
                            <li
                                key={href}
                                className='uppercase font-semibold text-slate-700'
                            >
                                <Link href={href}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <NavSearchBar />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavUl;
