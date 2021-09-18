import { useEffect } from "react";
import PageHeader from "../components/UI/PageHeader";
import ImgGallery from "../components/imgGallery/ImgGallery";

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | Titwood Tennis";
  });
  return (
    <div className="padding">
      <PageHeader title="Gallery" />
      <ImgGallery />
    </div>
  );
};

export default Gallery;
