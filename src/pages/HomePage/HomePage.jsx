import css from "./HomePage.module.css";

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
          <button className={css.btn}>View Now</button>
        </div>
      </div>
    </main>
  );
}
