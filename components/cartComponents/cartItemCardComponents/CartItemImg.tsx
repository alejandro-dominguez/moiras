'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
    slug: string
    image: string
    title: string
}

const CartItemImg = ({ slug, image, title }: Props) => {
    const [ loaded, setLoaded ] = useState(false)

    return (
        <div className='relative w-full h-46 sm:w-24 sm:h-24'>
            {!loaded && (
                <div className='absolute inset-0 bg-white/10 animate-pulse rounded-xs' />
            )}
            <Link href={`/tienda/${slug}`}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    onLoadingComplete={() => setLoaded(true)}
                    className={`object-cover rounded-xs shadow transition-opacity duration-300
                    ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </Link>
        </div>
    )
}

export default CartItemImg;
