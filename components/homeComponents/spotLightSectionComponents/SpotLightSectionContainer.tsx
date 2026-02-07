import Image from 'next/image';
import SpotlightBanner from './SpotlightBanner';
import SpotlightProductCard from './SpotlightProductCard';
import SpotlightImg from './SpotlightImg';
import { products } from '@/data/products.data';
import { spotlightImages } from '@/data/spotlight.data';

const SpotLightSectionContainer = () => {
    return (
        <section>
            <SpotlightBanner />
            <div className='flex flex-col md:flex-row gap-7 md:gap-0'>
                {spotlightImages.map(spotlightImg => (
                   <SpotlightImg key={spotlightImg.id} spotlightImage={spotlightImg} />
                ))}
                <div className='flex flex-col md:justify-center md:items-center md:w-1/2'>
                    {products.map((product) => (
                        product.spotlight ?
                            <SpotlightProductCard key={product.id} product={product} />
                        : null
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SpotLightSectionContainer;
