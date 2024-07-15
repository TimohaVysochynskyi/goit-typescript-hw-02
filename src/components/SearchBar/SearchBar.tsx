import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

const error = () => toast.error("Do not leave an empty field!");

type Props = {
  onSearch: (arg: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const inputValue: string = (form.elements.namedItem('input') as HTMLInputElement).value;

    if (inputValue.length === 0) {
      error();
    } else {
      onSearch(inputValue);
    }
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} action="" onSubmit={handleSubmit}>
        <button type="submit" className={css.btn}>
          <IoIosSearch size="24" />
        </button>
        <input
          type="text"
          placeholder="Search for images here..."
          className={css.input}
          autoComplete="off"
          name="input"
        />
      </form>
    </div>
  );
}
