'use client';

interface FallbackImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

export default function FallbackImage({ src, alt, fallbackSrc, className }: FallbackImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        if (fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        }
      }}
      className={className}
    />
  );
} 