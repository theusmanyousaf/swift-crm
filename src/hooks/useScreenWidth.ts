import { useState, useEffect } from "react";

export default function useScreenWidth(innerWidth: number) {

    const [isDesktop, setDesktop] = useState(window.innerWidth > innerWidth);

    const updateMedia = () => {
        setDesktop(window.innerWidth > innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return isDesktop;
}
