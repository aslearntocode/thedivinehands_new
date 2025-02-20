'use client';
import Image from 'next/image';

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function FallbackImage({ src, alt, fallbackSrc, className, width, height }: FallbackImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 100}
      height={height || 100}
      className={className}
      onError={(e) => {
        if (fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        }
      }}
    />
  );
} 