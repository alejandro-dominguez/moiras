'use client';
// Create forbidden or unauthorized components for authorization errors
import ErrorRefresh from '@/components/errorComponents/ErrorRefresh';
import ErrorLink from '@/components/errorComponents/ErrorLink';
import { useEffect } from 'react';
 
const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
    useEffect(() => {
        console.error(error)
    }, [error])
 
    return (
        <main className='px-3 sm:px-5 md:px-16 lg:px-24 mt-4 md:mt-5 min-h-svh'>
            <h1 className='font-medium text-center'>
                <span>
                    ¡Ups! parece que algo ha salido mal.
                </span>
                <span>
                    Lamentamos mucho el inconveniente.
                </span>
            </h1>
            <div className='flex flex-col items-center gap-5 mt-7'>
                <ErrorRefresh reset={reset} />
                <ErrorLink />
            </div>
        </main>
    )
}


export default GlobalError;
