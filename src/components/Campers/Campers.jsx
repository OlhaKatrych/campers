import css from "./Campers.module.css";
import { icons as sprite } from "../../shared/icons/index";

export default function Campers({ data }) {
  console.log(data);
  return (
    <>
      <img src={data.gallery[0].original} className={css.img} />
      <div className={css.content}>
        <h2 className={css.titleName}>{data.name}</h2>
        <div className={css.priceIcon}>
          <h2 className={css.price}>
            <span>&#8364;</span>
            {Number(`${data.price}`).toFixed(2)}
          </h2>
          <svg class={css.icon} width="24" height="21">
            <use xlinkHref={`${sprite}#heart`} />
          </svg>
        </div>
      </div>
    </>
  );
}
