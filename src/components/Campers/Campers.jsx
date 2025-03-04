import css from "./Campers.module.css";
import { icons as sprite } from "../../shared/icons/index";
import { useState, useEffect } from "react";
import { addFavourite } from "../../redux/favouritesCampers/slice";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";

export default function Campers({ data }) {
  console.log(data);
  const [isActive, setIsActive] = useState(false);
  const [rating, setRating] = useState(data.rating);
  const [isActiveHeart, setIsActiveHeart] = useState(false);
  const [isExpandedText, setIsExpandedText] = useState(false);
  const dispatch = useDispatch();

  const cardKey = data.id;

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

  const handleClickRating = () => {
    if (!isActive) {
      setIsActive(true);
      localStorage.setItem(`${cardKey}-active`, "true");
    }
    const increaseRating = (parseFloat(rating) + 0.5).toFixed(1);
    setRating(increaseRating);
    localStorage.setItem(`${cardKey}-rating`, increaseRating);
  };
  const handleClickHeart = () => {
    setIsActiveHeart(!isActiveHeart);
    dispatch(addFavourite(`${cardKey} - favorites`));
  };

  const maxLength = 65;

  const toggleText = () => {
    setIsExpandedText(!isExpandedText);
  };
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
          <button className={css.btnHeart} onClick={handleClickHeart}>
            <svg
              width="24"
              height="24"
              style={{
                fill: isActiveHeart ? "#E44848" : "#000",
              }}
            >
              <use xlinkHref={`${sprite}#heart`} />
            </svg>
          </button>
        </div>
        <div className={css.containerReviewLocation}>
          <div className={css.contentReview}>
            <button className={css.btnRating} onClick={handleClickRating}>
              <svg className={css.iconRating} width="16" height="16">
                <use
                  xlinkHref={`${sprite}#rating`}
                  style={{
                    fill: isActive ? "#FFC531" : "#F2F4F7",
                  }}
                />
              </svg>
            </button>
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
          <p className={css.textDesc}>
            {isExpandedText
              ? data.description
              : `${data.description.slice(0, maxLength)}`}
            {data.description.length > maxLength && (
              <button className={css.readMore} onClick={toggleText}>
                ...
              </button>
            )}
          </p>
          <div className={css.badgesContainer}>
            <span className={css.badges}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#diagram`} />
              </svg>
              Automatic
            </span>
            <span className={css.badges}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#fuel`} />
              </svg>
              Petrol
            </span>

            <span className={css.badges}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#cup`} />
              </svg>
              Kitchen
            </span>
            <span className={css.badges}>
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#wind`} />
              </svg>
              AC
            </span>
          
          </div>
        </div>
        <Button>Show more</Button>
      </div>
    </div>
  );
}
