'use client';

import Image from 'next/image';
import logo from '@/public/logo-1.svg';
import useIsMobile from '@/customHooks/useIsMobile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    onToggle: (newValue: boolean) => void
}

const NavLogo = ({ onToggle }: Props) => {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const isMobile = useIsMobile(768)

    const handleClick = () => {
        if (isMobile) {
            onToggle(false)
        }
    }

    if (isHome) {
        return (
            <div
                onClick={handleClick}
                className='w-40 z-50'
            >
                <Image
                    src={logo} alt='Logo Moiras'
                    className=' drop-shadow drop-shadow-[#f7005f]/50'
                />
            </div>
        )
    }

    return (
        <Link
            href='/'
            onClick={handleClick}
            className='w-40 z-50'
        >
            <Image
                src={logo} alt='Logo Moiras'
                className=' drop-shadow drop-shadow-[#f7005f]/50'
            />
        </Link>
    )
}

export default NavLogo;
