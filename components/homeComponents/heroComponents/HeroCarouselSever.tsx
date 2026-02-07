import HeroCarouselClient from './HeroCarouselClient';

export interface CarouselSlide {
    id: number
    image: string
    alt: string
}

const slides: CarouselSlide[] = [
    {
        id: 0,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
        alt: 'Visita Nuestra Tienda',
    },
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        alt: 'Boxeo, Funcional y Más',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        alt: 'asdasdas'
    },
]

const HeroCarouselServer = () => {
    return <HeroCarouselClient slides={slides} />
}

export default HeroCarouselServer;
