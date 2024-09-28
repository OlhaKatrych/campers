import css from "./Campers.module.css";
import { icons as sprite } from "../../shared/icons/index";

export default function Campers({ data }) {
  console.log(data);
  return (
    <div className={css.container}>
      <img src={data.gallery[0].original} className={css.img} />
      <div className={css.content}>
        <h2 className={css.titleName}>{data.name}</h2>
        <div className={css.containerPrice}>
          <h2 className={css.price}>
            <span>&#8364;</span>
            {Number(`${data.price}`).toFixed(2)}
          </h2>
          <svg className={css.iconHeart} width="24" height="21">
            <use xlinkHref={`${sprite}#heart`} />
          </svg>
        </div>
        <div className={css.containerReviewLocation}>
        <div className={css.contentReview}>
          <svg className={css.iconRating} width="16" height="16">
            <use xlinkHref={`${sprite}#rating`} />
          </svg>
          <p className={css.textReview}>
            {data.rating}({data.reviews[0].reviewer_rating} Reviews)
          </p>
        </div>
        <div className={css.containerLocation}>
          <svg className={css.location} width="16" height="16">
            <use xlinkHref={`${sprite}#map`} />
          </svg>
          <p className={css.textLocation}>{data.location}</p>
        </div>
        </div>
        <div className={css.containerDesc}>
          <p className={css.textDesc}>{data.description}</p>
        </div>
      </div>
    </div>
  );
}
