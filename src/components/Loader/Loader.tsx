import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#dddddd", "#eeeeee", "#ededed", "#ededed", "#ececec"]}
      />
    </div>
  );
}
