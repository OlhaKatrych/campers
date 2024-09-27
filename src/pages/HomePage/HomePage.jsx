import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main>
      <div className={css.heroImage}>
        <div className={css.hero}>
          <div className={css.textContainer}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <h2 className={css.desc}>
              You can find everything you want in our catalog
            </h2>
          </div>
          <button type="button" className={css.btn} onClick={()=> navigate('/catalog')}>
            View Now
          </button>
        </div>
      </div>
    </main>
  );
}
