import numberFormater from '@/utils/numberFormater';
import ProductDetailActions from '@/components/productDetailComponents/ProductDetailActions';
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
        <section className='min-h-svh'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start mt-2'>
                <div className='h-60 lg:h-75 w-80'>
                    <img src={image} alt={title} />
                </div>
                <div className='space-y-5'>
                    <h1 className='text-lg font-medium leading-6'>
                        {title}
                    </h1>
                    <p className='text-[.9rem] leading-5 -mt-1'>
                        {longDescription}
                    </p>
                    <p className='text-[.95rem] -mt-2'>
                        {numberFormater(price)}
                    </p>
                    <ProductDetailActions product={product} />
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;
