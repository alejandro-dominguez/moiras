import Image from 'next/image';
import logo from '@/public/logo-2.png';

const FooterFirstCol = () => {
    return (
        <div className='flex flex-col gap-4 items-center sm:items-start'>
            <div className='w-50'>
                <Image src={logo} alt='Logo Moiras' />
            </div>
        </div>
    )
}

export default FooterFirstCol;
