import { useLazyImage } from "../hooks/useLazyImage";

type Props = {
  src: string;
  alt?: string;
  width?: number;
};

const OptimizedImage = ({ src, alt = "", width = 200 }: Props) => {
  const { imgRef, loadedSrc } = useLazyImage(src);

  return (
    <div
      style={{
        width,
        height: "auto",
        background: "#eee",
        overflow: "hidden",
      }}
    >
      <img
        ref={imgRef}
        src={loadedSrc || ""}
        alt={alt}
        style={{
          width: "100%",
          filter: loadedSrc ? "blur(0)" : "blur(10px)",
          transition: "filter 0.3s ease",
        }}
      />
    </div>
  );
};

export default OptimizedImage;
