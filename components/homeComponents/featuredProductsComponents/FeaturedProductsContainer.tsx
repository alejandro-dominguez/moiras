import FeaturedProductsCard from './FeaturedProductsCard';
import { products } from '@/data/products.data';

const FeaturedProductsContainer = () => {
    return (
        <section className='mb-8 md:mb-20 mt-8'>
            <div className='w-fit mx-auto'>
                <h2
                    className='text-center text-3xl uppercase font-abrli-fatface
                    text-slate-900 mt-14 mb-7'
                >
                    COLECCIÓN DE LENCERÍA
                </h2>
                <div className='grid gap-5 lg:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                    {products.map((product) => (
                        product.featured ?
                            <FeaturedProductsCard key={product.id} product={product} />
                        : null
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProductsContainer;
