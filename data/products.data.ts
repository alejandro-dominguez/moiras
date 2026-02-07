export type Product = {
    id: number
    title: string
    price: number
    image: string
    featured: boolean
    bestSeller: boolean
    spotlight: boolean
}

export const products: Product[] = [
    {
        id: 1,
        title: 'Brown Bottom',
        price: 80,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        bestSeller: true,
        featured: false,
        spotlight: false,
    },
    {
        id: 2,
        title: 'Black Bikini',
        price: 90,
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        bestSeller: true,
        featured: false,
        spotlight: false,
    },
    {
        id: 3,
        title: 'Bandeau Top',
        price: 70,
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        bestSeller: true,
        featured: false,
        spotlight: false,
    },
    {
        id: 4,
        title: 'Gold Bikini',
        price: 100,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
        bestSeller: true,
        featured: false,
        spotlight: false,
    },
    {
        id: 5,
        title: 'One Piece Swimsuit',
        price: 100,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
        bestSeller: false,
        featured: true,
        spotlight: false,
    },
    {
        id: 6,
        title: 'Beach Bags',
        price: 100,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        bestSeller: false,
        featured: true,
        spotlight: false,
    },
    {
        id: 7,
        title: 'Triangle Bikini Set',
        price: 100,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        bestSeller: false,
        featured: true,
        spotlight: false,
    },
    {
        id: 8,
        title: 'Beach Bags',
        price: 100,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        bestSeller: false,
        featured: false,
        spotlight: true,
    },
]
