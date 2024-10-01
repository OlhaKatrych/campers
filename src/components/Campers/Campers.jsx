import css from "./Campers.module.css";
import { icons as sprite } from "../../shared/icons/index";
import { useState, useEffect } from "react";

export default function Campers({ data }) {
  const [isActive, setIsActive] = useState(false);
  const [rating, setRating] = useState(data.rating);
  const [isActivHeart, setIsActiveHeart] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const cardKey = `${data.id}`;

  useEffect(() => {
    const savedState = localStorage.getItem(`${cardKey}-active`);
    if (savedState === "true") {
      setIsActive(true);
    }
    const savedRating = localStorage.getItem(`${cardKey}-rating`);
    if (savedRating) {
      setRating(savedRating);
    }
  }, [cardKey]);
  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      localStorage.setItem(`${cardKey}-active`, "true");
    }
    const increaseRating = (parseFloat(rating) + 0.5).toFixed(1);
    setRating(increaseRating);
    localStorage.setItem(`${cardKey}-rating`, increaseRating);
  };
  const handleClickBtnHeart = () => {
    let updatedFavourites;
    setIsActiveHeart(!isActivHeart);
    setFavourites((prevState) => {
      const isFavourite = prevState.some((item) => item.id === data.id);

      if (isFavourite) {
        updatedFavourites = prevState.filter((item) => item.id !== data.id);
      } else {
        updatedFavourites = [...prevState, data];
      }
    });
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };
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
          <button className={css.btnHeart} onClick={handleClickBtnHeart}>
            <svg
              width="24"
              height="24"
              style={{
                fill: isActivHeart ? "#E44848" : "#000",
              }}
            >
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </button>
        </div>
        <div className={css.containerReviewLocation}>
          <div className={css.contentReview}>
            <svg
              className={css.iconRating}
              width="16"
              height="16"
              onClick={handleClick}
            >
              <use
                xlinkHref={`${sprite}#rating`}
                style={{
                  fill: isActive ? "#FFC531" : "#F2F4F7",
                }}
              />
            </svg>
            <p className={css.textReview}>
              <span className={css.rat}>{rating}</span> (
              {data.reviews[0].reviewer_rating} Reviews)
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
