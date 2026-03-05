'use client';

import { IoIosArrowBack } from 'react-icons/io';

type Props = {
    current: number
    goPrev: () => void
}

const PaginationPrev = ({ current, goPrev }: Props) => {
    return (
        <button
            onClick={goPrev}
            className={`${current === 1 ? 'opacity-40 cursor-auto' : 'cursor-pointer'}`}
        >
            <IoIosArrowBack size={20} />
        </button>
    )
}

export default PaginationPrev;
