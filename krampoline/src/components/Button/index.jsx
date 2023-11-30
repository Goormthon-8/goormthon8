import * as S from "./Button.style";
const Button = ({ children, disabled }) => {
  return (
    <S.Container disabled={disabled}>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};

export default Button;
