"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ImageWithFallback({ src, alt, fallbackSrc, ...props }) {
        const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        const img = document.createElement('img');
        img.src = src;
        img.onload = () => setImgSrc(src);
        img.onerror = () => setImgSrc(fallbackSrc);
    }, [src, fallbackSrc]);

    const handleError = (e) => {
        if (!e.target.src.endsWith(fallbackSrc)) { // 防止无限循环
            e.target.src = fallbackSrc;
        }
    };
  
    return <Image src={src} alt={alt} onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }} {...props} width={props.width} height={props.height} />;
  }
  
  