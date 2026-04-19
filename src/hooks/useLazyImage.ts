import { useEffect, useRef, useState } from "react";

export const useLazyImage = (src: string) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string>("");

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoadedSrc(src);
          observer.disconnect();
        }
      });
    });

    observer.observe(img);

    return () => observer.disconnect();
  }, [src]);

  return { imgRef, loadedSrc };
};
