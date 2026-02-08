import FooterFirstCol from './footerComponents/FooterFirstCol';
import FooterSecondCol from './footerComponents/FooterSecondCol';
import FooterThirdCol from './footerComponents/FooterThirdCol';

const Footer = () => {
    return (
        <footer className='border-rose-300/70 border-t-2'>
            <div className='py-20'>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2'>
                    <FooterFirstCol />
                    <FooterSecondCol />
                    <FooterThirdCol />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
