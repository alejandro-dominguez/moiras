import Header from '@/components/layoutComponents/Header';
import Footer from '@/components/layoutComponents/Footer';
import WhatsappBtn from './../components/layoutComponents/WhatsappBtn';
import './globals.css';
import type { Metadata } from 'next';
import { Abril_Fatface, Poppins } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'Las Moiras',
    description: 'Las Moiras - Sleep Underwear',
};

const abrilFatFace = Abril_Fatface({
    variable: '--font-abrli-fatface',
    subsets: ['latin'],
  	weight: '400',
});

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en'>
            <body 
                className={`${poppins.variable} ${abrilFatFace.variable}
                px-4 sm:px-15 md:px-30 max-w-400 mx-auto`}
            >
                <div className='font-poppins'>
                    <CartProvider>
                        <Header />
                        <main>
                            {children}
                        </main>
                        <WhatsappBtn />
                        <Footer />
                    </CartProvider>
                    <Toaster
                        position='top-center'
                        containerStyle={{
                            top: '4.5rem',
                        }}
                        toastOptions={{
                            duration: 2500,
                            style: {
                                background: '#07178E',
                                color: '#fff',
                            },
                        }}
                    />
                </div>
            </body>
        </html>
    )
}

export default RootLayout;
