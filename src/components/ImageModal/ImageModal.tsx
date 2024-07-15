import Modal from "react-modal";

import css from "./ImageModal.module.css";
import { FcLike } from "react-icons/fc";
import { PhotoDataType } from "../../common.types";

Modal.setAppElement("#root");

type Props = {
  image: PhotoDataType;
  isOpen: boolean;
  onClose: ()=>void;
}

export default function ImageModal({
  image: {
    created_at,
    description,
    urls: { regular },
    links: { download },
    likes,
    user: { name },
  },
  isOpen,
  onClose,
}: Props) {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className={css.col}>
        <img src={regular} alt="Image" className={css.image} />
      </div>
      <div className={css.col}>
        <h2 className={css.title}>Some details:</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.itemContent}>Created at: </span>
            <span className={css.itemContent}>{created_at}</span>
          </li>
          <li className={css.item}>
            <span className={css.itemContent}>Author: </span>
            <span className={css.itemContent}>{name}</span>
          </li>
          <li className={css.item}>
            <span className={css.itemContent}>Description: </span>
            <span className={css.itemContent}>
              {description != null ? description : "No description"}
            </span>
          </li>
          <li className={css.item}>
            <span className={css.itemContent}>Likes: </span>
            <span className={css.itemContent}>
              {likes}
              <FcLike size="20" />
            </span>
          </li>
          <li className={css.item}>
            <span className={css.itemContent}>Download here: </span>
            <span className={css.itemContent}>
              <a href={download}>Click me</a>
            </span>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
