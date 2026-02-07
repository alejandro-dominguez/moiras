import FooterFirstCol from './footerComponents/FooterFirstCol';
import FooterSecondCol from './footerComponents/FooterSecondCol';
import FooterThirdCol from './footerComponents/FooterThirdCol';
import FooterFourthCol from './footerComponents/FooterFourthCol';

const Footer = () => {
    return (
        <footer className='border-rose-300/70 border-t-2'>
            <div className='py-20'>
                <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4'>
                    <FooterFirstCol />
                    <FooterSecondCol />
                    <FooterThirdCol />
                    <FooterFourthCol />
                    <div>
                        <h3 className='text-xs uppercase tracking-wide mb-4'>
                            Help
                        </h3>
                        <ul className='space-y-2 text-sm text-neutral-600'>
                            <li><a href='#'>FAQ</a></li>
                            <li><a href='#'>Shipping</a></li>
                            <li><a href='#'>Returns</a></li>
                            <li><a href='#'>Order Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xs uppercase tracking-wide mb-4'>
                            Shop
                        </h3>
                        <ul className='space-y-2 text-sm text-neutral-600'>
                            <li><a href='#'>Bikini Sets</a></li>
                            <li><a href='#'>Swimsuits</a></li>
                            <li><a href='#'>Bikini Bottoms</a></li>
                            <li><a href='#'>Vintage Swimsuit</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xs uppercase tracking-wide mb-4'>
                            Social
                        </h3>
                        <ul className='space-y-2 text-sm text-neutral-600'>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='#'>Youtube</a></li>
                            <li><a href='#'>Telegram</a></li>
                            <li><a href='#'>Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
