import Image from 'next/image';
import Link from 'next/link';
import numberFormater from '@/utils/numberFormater';
import BestSellersCardActions from './bestSellersCardComponents/BestSellersCardActions';
import { Product } from '@/data/products.data';

const BestSellersCard = ({ product }: { product: Product }) => {
    const { title, image, price, slug } = product

    return (
        <article className='grid place-items-start mx-auto'>
            <Link
                href={`/tienda/${slug}`}
                className='relative w-70 h-75 md:h-50 sm:w-60 md:w-45 cursor-pointer'
            >
                <Image
                    fill
                    src={image}
                    className='object-cover'
                    alt={title}
                />
            </Link>
            <h3 className='font-semibold text-slate-900 mt-3'>
                {title}
            </h3>
            <p className='text-sm my-1'>
                {numberFormater(price)}
            </p>
            <BestSellersCardActions product={product} />
        </article>
    )
}

export default BestSellersCard;