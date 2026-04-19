import ImageGallery from "./components/ImageGallery";
import "./styles/image.css";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Optimized Image Loading</h1>

      <p>Images will lazy load with blur effect</p>

      <ImageGallery />
    </div>
  );
}

export default App;
