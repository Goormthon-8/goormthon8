import * as S from "./Input.style";

const Input = ({ value, onClick }) => {
  return <S.Container value={value} onClick={onClick} />;
};

export default Input;
