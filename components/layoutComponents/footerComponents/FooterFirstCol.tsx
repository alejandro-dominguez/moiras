import Image from 'next/image';
import logo from '@/public/logo-2.png';
import Link from 'next/link';

const FooterFirstCol = () => {
    return (
        <div className='flex flex-col gap-4 items-center sm:items-start'>
          <Link
                href='https://www.instagram.com/las_moiras_rosario'
                referrerPolicy='no-referrer'
                rel='noopener'  
                target='_blank'
                className='w-50'
            >
                <Image src={logo} alt='Logo Moiras' />
            </Link>
        </div>
    )
}

export default FooterFirstCol;
