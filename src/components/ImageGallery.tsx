import OptimizedImage from "./OptimizedImage";

const images = [
  "https://picsum.photos/300/200?1",
  "https://picsum.photos/300/200?2",
  "https://picsum.photos/300/200?3",
  "https://picsum.photos/300/200?4",
  "https://picsum.photos/300/200?5",
];

const ImageGallery = () => {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {images.map((src, i) => (
        <OptimizedImage key={i} src={src} alt={`img-${i}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
