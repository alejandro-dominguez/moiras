import Image from 'next/image';
import Link from 'next/link';
import numberFormater from '@/utils/numberFormater';
import SpotlightProductCardActions from './spotlightCardComponents/SpotlightProductCardActions';
import { Product } from '@/data/products.data';

const SpotlightProductCard = ({ product }: { product: Product }) => {
    const { title, image, price, slug } = product
    
    return (
        <div className='flex flex-col items-start mx-auto md:block'>
            <Link href={`/tienda/${slug}`}>
                <div className='relative h-56 w-57 md:w-50 lg:w-70 cursor-pointer'>
                    <Image
                        fill
                        src={image}
                        className='object-cover'
                        alt={title}
                    />
                </div>
            </Link>
            <div>
                <h3 className='font-semibold text-slate-900 mt-4'>
                    {title}
                </h3>
                <p className='text-sm my-1'>
                    {numberFormater(price)}
                </p>
                <SpotlightProductCardActions product={product} />
            </div>
        </div>
    )
}

export default SpotlightProductCard;
