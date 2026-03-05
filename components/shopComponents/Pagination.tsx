'use client';

import scrollTop from '@/utils/scrollTop';
import PaginationPrev from './paginationComponents/PaginationPrev';
import PaginationNext from './paginationComponents/PaginationNext';
import PaginationNumbers from './paginationComponents/PaginationNumbers';
import { useEffect } from 'react';

type Props = {
    total: number
    perPage: number
    current: number
    onChange: (p: number) => void
}

const Pagination = ({ total, perPage, current, onChange }: Props) => {
    const pages = Math.ceil(total / perPage)

    const goPrev = () => {
        if (current === 1) return
        onChange(current - 1)
    }
    
    const goNext = () => {
        if (current === pages) return
        onChange(current + 1)
    }

    useEffect(() => {
        scrollTop()
    }, [current])

    return (
        <div className='flex flex-col -mt-2'>
            <div className='flex justify-center items-center gap-4 mt-9 text-xl font-medium'>
                <PaginationPrev current={current} goPrev={goPrev} />
                {Array.from({ length: pages }).map((_, i) => (
                    <PaginationNumbers
                        key={i}
                        i={i}
                        current={current}
                        onChange={onChange}
                    />
                ))}
                <PaginationNext current={current} goNext={goNext} pages={pages} />
            </div>
            <div className='py-5 w-full' />
            <div className='py-5 w-full' />
            <div className='py-5 w-full' />
        </div>
    )
}

export default Pagination;
