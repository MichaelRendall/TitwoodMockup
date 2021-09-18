import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./ImgGalleryOverride.scss";

import one from "../../assets/main-background.jpg";
import two from "../../assets/court4.jpg";
import three from "../../assets/courts-2and3.jpg";
import four from "../../assets/court3.jpg";
import five from "../../assets/brodie.jpg";
import six from "../../assets/alan.jpg";
import seven from "../../assets/champions-board.jpg";

import oneThumb from "../../assets/thumbnails/main-background.jpg";
import twoThumb from "../../assets/thumbnails/court4.jpg";
import threeThumb from "../../assets/thumbnails/courts-2and3.jpg";
import fourThumb from "../../assets/thumbnails/court3.jpg";
import fiveThumb from "../../assets/thumbnails/brodie.jpg";
import sixThumb from "../../assets/thumbnails/alan.jpg";
import sevenThumb from "../../assets/thumbnails/champions-board.jpg";

const images = [
  {
    original: one,
    thumbnail: oneThumb,
  },
  {
    original: two,
    thumbnail: twoThumb,
  },
  {
    original: three,
    thumbnail: threeThumb,
  },
  {
    original: four,
    thumbnail: fourThumb,
  },
  {
    original: five,
    thumbnail: fiveThumb,
  },
  {
    original: six,
    thumbnail: sixThumb,
  },
  {
    original: seven,
    thumbnail: sevenThumb,
  },
];

const ImgGallery = () => {
  return (
    <div className="section-container">
      <ImageGallery
        items={images}
        thumbnailPosition="top"
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
      />
    </div>
  );
};

export default ImgGallery;
