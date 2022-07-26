import css from "./Button.module.css";

const Button = ({txt, isActive, ...restProps}) => {
  return <div className={ isActive ? [css.btn, css.btnActive].join(' ') : css.btn} {...restProps}>{txt}</div>;
}

export default Button