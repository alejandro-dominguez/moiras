import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products.data';

const FeaturedProductsCard = ({ product }: { product: Product }) => {
    const { title, image, shortDescription } = product

    return (
        <article className='mx-auto'>
            <div className='relative w-65 h-100 cursor-pointer'>
                <Image
                    fill
                    src={image}
                    className='object-cover'
                    alt={title}
                />
            </div>
            <div className='w-65 wrap-break-word pr-2 mt-3'>
                <h3 className='font-semibold text-slate-900'>
                    {title}
                </h3>
                <p className='text-sm line-clamp-1'>
                    {shortDescription}
                </p>
            </div>
            <div className='flex gap-5 mb-5'>
                <button
                    className='border px-4 py-2 text-[.85rem] mt-3 mb-3 lg:mb-0
                    transition-colors tracking-wide cursor-pointer hover:bg-slate-950/10'
                >
                    Agregar
                </button>
                <button
                    className='border px-4 py-2 text-[.85rem] mt-3 mb-3 lg:mb-0
                    transition-colors tracking-wide cursor-pointer hover:bg-slate-950/10'
                >
                    Ver más
                </button>
            </div>
        </article>
    )
}

export default FeaturedProductsCard;
