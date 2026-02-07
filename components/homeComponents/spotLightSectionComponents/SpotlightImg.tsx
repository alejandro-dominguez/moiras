import Image from 'next/image';
import { SpotlightImage } from '@/data/spotlight.data';

const SpotlightImg = ({ spotlightImage }: { spotlightImage : SpotlightImage }) => {
    const { image, title } = spotlightImage

    return (
        <div className='relative w-full md:w-1/2 h-100 md:h-120'>
            <Image
                fill
                src={image}
                className='object-cover'
                alt={title}
            />
        </div>
    )
}

export default SpotlightImg;
