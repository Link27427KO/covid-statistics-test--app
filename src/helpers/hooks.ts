import { useEffect, useState } from 'react'
import { isScreenWidth } from './functions'

export const useIsMobileScreen = (width: number) => {
    const initialScreenWidth = isScreenWidth(width)
    const [isMobile, setIsMobile] = useState<boolean>(initialScreenWidth || false)

    const handleResize = () => {
        if (isScreenWidth(width)) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isMobile
}
