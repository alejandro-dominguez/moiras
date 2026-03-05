import numberFormater from '@/utils/numberFormater';

type Props = {
    title: string
    shortDescription: string
    price: number
}

const ProductCardContent = ({ title, shortDescription, price }: Props) => {
    return (
        <div className='flex-1 flex flex-col'>
            <div className='flex-1 mt-2'>
                <h3 className='text-lg font-semibold leading-6 line-clamp-1'>
                    {title}
                </h3>
                <p className='mt-1 text-[.9rem] leading-5 line-clamp-1'>
                    {shortDescription}
                </p>
            </div>
            <div className='mt-2 font-medium text-[.95rem]'>
                {numberFormater(price)}
            </div>
        </div>
    )
}

export default ProductCardContent;
