import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
  disabled: boolean;
}

export default function LoadMoreBtn({ onClick, disabled }:Props) {
  return (
    <div className={css.container}>
      <button type="button" className={css.btn} onClick={onClick} disabled={disabled}>
        Load more
      </button>
    </div>
  );
}
