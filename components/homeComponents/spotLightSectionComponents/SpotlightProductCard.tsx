import Image from 'next/image';
import Link from 'next/link';
import numberFormater from '@/utils/numberFormater';
import { Product } from '@/data/products.data';

const SpotlightProductCard = ({ product }: { product: Product }) => {
    const { title, image, price } = product
    
    return (
        <div className='flex flex-col items-start mx-auto md:block'>
            <div className='relative h-56 w-57 md:w-50 lg:w-70 cursor-pointer'>
                <Image
                    fill
                    src={image}
                    className='object-cover'
                    alt={title}
                />
            </div>
            <div>
                <h3 className='font-semibold text-slate-900 mt-4'>
                    White Bikini Top
                </h3>
                <p className='text-sm my-1'>
                    {numberFormater(price)}
                </p>
                <button
                    className='border w-57 md:w-50 lg:w-70 py-2 md:px-0 text-[.85rem] mt-3
                    transition-colors tracking-wide hover:bg-slate-950/10 cursor-pointer'
                >
                    Agregar 
                </button>
            </div>
        </div>
    )
}

export default SpotlightProductCard;
