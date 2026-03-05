import Image from 'next/image';

type Props = {
  image: string
  title: string
}

const ProductCardImage = ({ image, title }: Props) => {
    return (
        <div
            className='relative h-75 md:h-56 w-full overflow-hidden
            flex items-center justify-center group cursor-zoom-in'
        >
            <Image
                src={image}
                alt={title}
                fill
                sizes='(max-width: 768px) 100vw, 25vw'
                className='object-cover'
            />
        </div>
    )
}

export default ProductCardImage;
