import Image from 'next/image';
import logo from '@/public/logo-2.png';

const FooterThirdCol = () => {

    return (
        <div className='mx-auto md:mx-0'>
            <div className='w-50'>
                <Image src={logo} alt='Logo Moiras' />
            </div>
        </div>
    )
}

export default FooterThirdCol;
