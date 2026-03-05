'useClient';

import ProductCardImage from './productCardComponents/ProductCardImage';
import ProductCardContent from './productCardComponents/ProductCardContent';
import ProductCardActions from './productCardComponents/ProductCardActions';
import { Product } from '@/data/products.data';

const ProductCard = ({ product }: { product: Product }) => {
    const { title, image, shortDescription, price } = product

    return (
        <div className='flex flex-col'>
            <ProductCardImage image={image} title={title} />
            <ProductCardContent
                title={title}
                shortDescription={shortDescription}
                price={price}
            />
            <ProductCardActions product={product} />
        </div>
    )
}

export default ProductCard;
