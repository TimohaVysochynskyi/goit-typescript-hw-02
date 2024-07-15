import css from "./ErrorMessage.module.css";
import errorImage from "./error-image.png";
export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <img className={css.image} src={errorImage} alt="Something went wrong" />
      <p className={css.title}>Unknown error :(</p>
      <p className={css.description}>
        Check your internet connection and reload the page
      </p>
    </div>
  );
}
