import Link from 'next/link';

const HeroCarouselContent = () => {
    return (
        <div className='relative z-20 h-full flex px-5 md:px-10 pt-4 md:pt-8'>
            <div className='mx-auto w-full'>
                <div className='text-white'>
                    <h1
                        className='text-3xl sm:text-4xl lg:text-5xl font-light tracking-wider
                        mb-3 font-abrli-fatface leading-9 sm:leading-10 lg:leading-12'
                    >
                        TU LUGAR DE LENCERÍA
                    </h1>
                    <p className='sm:text-lg lg:text-xl mb-9 opacity-90 leading-5'>
                        Descubre las telas que te hacen lucir increíble
                    </p>
                    <Link
                        href='/tienda'
                        className='bg-white/10 border border-white px-6 py-4 text-sm
                        uppercase tracking-wider transition-colors hover:bg-white/20'
                    >
                        Comprar ahora
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroCarouselContent;
