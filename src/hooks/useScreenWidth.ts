import { useState, useEffect } from 'react';

export default function useScreenWidth(innerWidth: number) {
    // Initialize state with a default value to avoid referencing window on the server
    const [isDesktop, setDesktop] = useState<boolean>(false);

    useEffect(() => {
        // Ensure window is defined before accessing it
        const handleResize = () => {
            setDesktop(window.innerWidth > innerWidth);
        };

        // Set the initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [innerWidth]);

    return isDesktop;
}
