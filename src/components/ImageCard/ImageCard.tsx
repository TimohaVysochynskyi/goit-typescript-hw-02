import { PhotoDataType } from "../../common.types";
import css from "./ImageCard.module.css";
import { FcLike } from "react-icons/fc";

type Props = {
  image: PhotoDataType;
  openModal: (arg: PhotoDataType)=>void;
}

export default function ImageCard({
  image,
  image: {
    urls: { small },
    user: { name },
    likes,
    created_at,
  },
  openModal,
}: Props) {
  return (
    <div className={css.container} onClick={() => openModal(image)}>
      <img className={css.image} src={small} alt="Image" />
      <div className={css.description}>
        <p className={css.text}>{name}</p>
        <p className={(css.text, css.likes)}>
          {likes}
          <FcLike />
        </p>
        <span className={css.date}>{created_at}</span>
      </div>
    </div>
  );
}
