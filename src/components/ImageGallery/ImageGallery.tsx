import { PhotoDataType } from "../../common.types";
import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

type Props = {
  images: PhotoDataType[];
  openModal: (arg: PhotoDataType) => void;
}

export default function ImageGallery({ images, openModal }: Props) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {images.map((image) => (
          <li className={css.item} key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}
