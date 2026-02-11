import Link from 'next/link';

const FooterFirstCol = () => {
    return (
        <div>
            <h3 className='font-medium uppercase tracking-wide mb-4'>
                TIENDA
            </h3>
            <ul className='space-y-2 text-sm'>
                <li><a href='#'>Pijamas</a></li>
                <li><a href='#'>Ropa Interior</a></li>
                <li><a href='#'>Medias</a></li>
            </ul>
            <div className='flex flex-col gap-1 mt-14 text-[.825rem] mb-6'>
                <Link href='/terminos&condiciones'>
                    Términos y condiciones
                </Link>
                <Link href='/devoluciones'>
                    Devoluciones
                </Link>
            </div>
            <small>
                &copy; 2026 Pixel Coffee
            </small>
        </div>
    )
}

export default FooterFirstCol;
