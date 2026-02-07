import Image from 'next/image';
import Link from 'next/link';
import numberFormater from '@/utils/numberFormater';
import { Product } from '@/data/products.data';

const BestSellersCard = ({ product }: { product: Product }) => {
    const { title, image, price } = product

    return (
        <article className='grid place-items-start mx-auto'>
            <div className='relative w-70 h-75 md:h-50 sm:w-60 md:w-45 cursor-pointer'>
                <Image
                    fill
                    src={image}
                    className='object-cover'
                    alt={title}
                />
            </div>
            <h3 className='font-semibold text-slate-900 mt-3'>
                {title}
            </h3>
            <p className='text-sm my-1'>
                {numberFormater(price)}
            </p>
            <button
                className='border px-4 py-2 text-[.85rem] mt-3 mb-3 lg:mb-0
                transition-colors tracking-wide cursor-pointer hover:bg-slate-950/10'
            >
                Agregar
            </button>
        </article>
    )
}

export default BestSellersCard;