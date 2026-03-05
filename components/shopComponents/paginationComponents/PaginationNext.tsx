'use client';

import { IoIosArrowForward } from 'react-icons/io';

type Props = {
    current: number
    pages: number
    goNext: () => void
}

const PaginationNext = ({ current, goNext, pages }: Props) => {
    return (
        <button
            onClick={goNext}
            className={`${current === pages ? 'opacity-40 cursor-auto' : 'cursor-pointer'}`}
        >
            <IoIosArrowForward size={20} />
        </button>
    )
}

export default PaginationNext;
