import "../styles/gallery.css";
export default function Gallery() {
  return (
    <div className="galleryContainer">
      <h1 className="galleryTitle">Gallery</h1>
      {/* needs a rolling gallery*/}
      <div className="galleryScrollContainer"></div>
      <div className="galleryScroll"></div>
    </div>
  );
}
