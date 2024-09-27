import css from './Button.module.css';

export default function Button({children}) {
  return (
    <>
    <button type='button' className={css.btn}>{children}</button>
    </>
  )
}
