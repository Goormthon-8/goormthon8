import * as S from "./Button.style";
<<<<<<< HEAD

const Button = ({ children, disabled, onClick }) => {
  return (
    <S.Container disabled={disabled} onClick={onClick}>
      {children}
=======
const Button = ({ children, disabled }) => {
  return (
    <S.Container disabled={disabled}>
      <S.Text>{children}</S.Text>
>>>>>>> 0336021 (feat : sticker)
    </S.Container>
  );
};

export default Button;
