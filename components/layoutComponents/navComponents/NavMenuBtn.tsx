'use client';

import { IoMenu, IoClose } from 'react-icons/io5';

interface Props {
    isVisible: boolean
    onToggle: (newValue: boolean) => void
}

const NavMenuBtn = ({ isVisible, onToggle }: Props) => {
    return (
        <button
            className='mt-2 -ml-1 z-50 relative'
            onClick={() => onToggle(!isVisible)}
            aria-label={isVisible ? 'cerrar menú' : 'abrir menú' }
        >
            {isVisible ? <IoClose size={33} /> : <IoMenu size={33} />}
        </button>
    )
}

export default NavMenuBtn;
