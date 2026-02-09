import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products.data';
import FeaturedProductsCardActions from './featuredProductsCardComponents/FeaturedProductsCardActions';

const FeaturedProductsCard = ({ product }: { product: Product }) => {
    const { title, image, shortDescription, slug } = product

    return (
        <article className='mx-auto'>
            <Link href={`/tienda/${slug}`}>
                <div className='relative w-65 h-100 cursor-pointer'>
                    <Image
                        fill
                        src={image}
                        className='object-cover'
                        alt={title}
                    />
                </div>
            </Link>
            <div className='w-65 wrap-break-word pr-2 mt-3'>
                <h3 className='font-semibold text-slate-900'>
                    {title}
                </h3>
                <p className='text-sm line-clamp-1'>
                    {shortDescription}
                </p>
            </div>
            <FeaturedProductsCardActions product={product} />
        </article>
    )
}

export default FeaturedProductsCard;
