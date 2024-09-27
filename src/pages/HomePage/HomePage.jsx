import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";

export default function HomePage() {
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
          <Button>View Now</Button>
        </div>
      </div>
    </main>
  );
}
