import { products } from '@/data/products.data';
import BestSellersCard from './BestSellersCard';

const BestSellersContainer = () => {
    return (
        <section className='pt-24 pb-30'>
            <div className='w-fit mx-auto'>
                <h2 className='text-center text-3xl mb-7 uppercase font-abrli-fatface text-slate-900'>
                    MÁS VENDIDOS
                </h2>
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                    gap-5 place-items-center mx-auto'
                >
                    {products.map((product) => (
                        product.bestSeller ?
                            <BestSellersCard key={product.id} product={product} />
                        : null
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BestSellersContainer;
