'use client';

import Image from 'next/image';
import HeroCarouselContent from './heroCarouselComponents/HeroCarouselContent';
import type { CarouselSlide } from './HeroCarouselSever';
import { useEffect, useState } from 'react';

interface Props {
    slides: CarouselSlide[]
}

const HeroCarouselClient = ({ slides }: Props) => {
    const [ current, setCurrent ] = useState(0)

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className='relative h-[85vh] sm:h-[90vh] overflow-hidden'>
            {slides.map(({ alt, id, image }) => (
                <div
                    key={id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                    ${id === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <Image
                        src={image}
                        className='w-full h-full object-cover object-center'
                        fill
                        alt={alt}
                    />
                </div>
            ))}
            <div className='absolute inset-0 bg-black/35 z-10' />
            <HeroCarouselContent />
        </section>
    )
}

export default HeroCarouselClient;
