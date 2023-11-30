import * as S from "./Button.style";
const Button = ({ children, disabled }) => {
  return <S.Container disabled={disabled}>{children}</S.Container>;
};

export default Button;
