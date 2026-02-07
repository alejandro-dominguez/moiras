'use client';

import NavLogo from './NavLogo';
import NavUl from './NavUl';
import NavUlMd from './NavUlMd';
import { useState } from 'react';

const NavBar = () => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false)

    return (
        <nav className='w-full flex items-center justify-between text-sm'>
            <NavUl isVisible={showMobileMenu} onToggle={setShowMobileMenu} />
            <NavLogo onToggle={setShowMobileMenu} />
            <NavUlMd onToggle={setShowMobileMenu} />
        </nav>
    )
}

export default NavBar;
