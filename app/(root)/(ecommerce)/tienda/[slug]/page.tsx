import numberFormater from '@/utils/numberFormater';
/* import ProductDetailActions from '@/components/storeComponents/productDetailComponents/ProductDetailActions';
import ProductDetailImg from '@/components/storeComponents/productDetailComponents/ProductDetailImg'; */
import { products } from '@/data/products.data';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>
}

const ProductDetail = async ({ params }: Props) => {
    const { slug } = await params
    const product = products.find(p => p.slug === slug)
    
    if (!product) notFound()

    const { image, title, longDescription, price } = product

    return (
        <section className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5 min-h-svh'>
            <div
                className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 bg-darker rounded
                shadow shadow-darker/50 text-white pt-4 pb-5 items-center px-4 lg:px-20'
            >
{/*                 <ProductDetailImg image={image} title={title} /> */}
                <div className='space-y-5'>
                    <h1 className='text-lg font-semibold leading-6'>
                        {title}
                    </h1>
                    <p className='text-[.9rem] leading-5 -mt-1'>
                        {longDescription}
                    </p>
                    <p className='font-medium text-[.95rem] -mt-2'>
                        {numberFormater(price)}
                    </p>
{/*                     <ProductDetailActions product={product} /> */}
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;
