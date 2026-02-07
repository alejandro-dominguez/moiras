import Image from 'next/image';
import logo from '@/public/logo-2.png';
import Link from 'next/link';

const FooterFirstCol = () => {
    return (
        <div className='flex flex-col gap-4'>
          <Link
                href='https://www.instagram.com/forjastore.ar'
                referrerPolicy='no-referrer'
                rel='noopener'  
                target='_blank'
                className='w-50'
            >
                <Image src={logo} alt='Logo Moiras' />
            </Link>
            <small>
                &copy; 2026 Pixel Coffee
            </small>
        </div>
    )
}

export default FooterFirstCol;
