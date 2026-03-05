export type Product = {
    id: number
    slug: string
    title: string
    price: number
    image: string
    shortDescription: string
    longDescription: string
    featured: boolean
    bestSeller: boolean
    spotlight: boolean
    stock: boolean
    category:
        | 'pijamas'
        | 'ropa interior'
        | 'medias',
    /* brand: 'Leone' | 'Twins' | 'Venum' | 'Everlast' | 'Forja', */
}

export const products: Product[] = [
    {
        id: 1,
        slug: 'brown-bottom',
        title: 'Brown Bottom',
        price: 80,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'medias',
        bestSeller: true,
        featured: false,
        spotlight: false,
        stock: true,
    },
    {
        id: 2,
        slug: 'white-bottom',
        title: 'Black Bikini',
        price: 90,
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'pijamas',
        bestSeller: true,
        featured: false,
        spotlight: false,
        stock: true,
    },
    {
        id: 3,
        slug: 'grey-bottom',
        title: 'Bandeau Top',
        price: 70,
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'ropa interior',
        bestSeller: true,
        featured: false,
        spotlight: false,
        stock: true,
    },
    {
        id: 4,
        slug: 'pink-bottom',
        title: 'Gold Bikini',
        price: 100,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'medias',
        bestSeller: true,
        featured: false,
        spotlight: false,
        stock: true,
    },
    {
        id: 5,
        slug: 'blue-bottom',
        title: 'One Piece Swimsuit',
        price: 100,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'pijamas',
        bestSeller: false,
        featured: true,
        spotlight: false,
        stock: true,
    },
    {
        id: 6,
        slug: 'yellow-bottom',
        title: 'Beach Bags',
        price: 100,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'ropa interior',
        bestSeller: false,
        featured: true,
        spotlight: false,
        stock: true,
    },
    {
        id: 7,
        slug: 'green-bottom',
        title: 'Triangle Bikini Set',
        price: 100,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'medias',
        bestSeller: false,
        featured: true,
        spotlight: false,
        stock: true,
    },
    {
        id: 8,
        slug: 'red-bottom',
        title: 'Beach Bags',
        price: 100,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        longDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea.',
        category: 'ropa interior',
        bestSeller: false,
        featured: false,
        spotlight: true,
        stock: true,
    },
]
