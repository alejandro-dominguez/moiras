import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number): boolean => {
    const [ isMobile, setIsMobile ] = useState<boolean>(() => {
        if (typeof window !== 'undefined' && window.visualViewport) {
            return window.visualViewport.width < breakpoint
        }
        return false
    })

    useEffect(() => {
        const checkMobile = () => {
            if (window.visualViewport) {
                setIsMobile(window.visualViewport.width < breakpoint);
            }
        }
        window.visualViewport?.addEventListener('resize', checkMobile)
        return () => window.visualViewport?.removeEventListener('resize', checkMobile)
    }, [breakpoint])

    return isMobile
}

export default useIsMobile;
