import { useState, useEffect } from 'react';

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => window.innerWidth <= 768;
        setIsMobile(checkMobile());

        // 添加 resize 事件监听
        window.addEventListener("resize", () => setIsMobile(checkMobile()));

        // 清除事件监听
        return () => {
            window.removeEventListener("resize", () => setIsMobile(checkMobile()));
        };
    }, []);

    return isMobile;
}