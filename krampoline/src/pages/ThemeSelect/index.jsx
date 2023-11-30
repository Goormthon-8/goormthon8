import Button from "../../components/Button";
import GlobalNavigation from "../../components/GNB";
import * as S from "./ThemeSelect.style";

const ThemeSelect = () => {
  return (
    <S.Container>
      <S.Text>가는 날짜</S.Text>
      <S.Text>오는 날짜</S.Text>
      <S.Text>방문하시는 계절을 선택해주세요!</S.Text>
      <S.ThemeContainer>
        <S.Theme>봄</S.Theme>
        <S.Theme>여름</S.Theme>
        <S.Theme>가을</S.Theme>
        <S.Theme>겨울</S.Theme>
      </S.ThemeContainer>
      <S.ButtonContainer>
        <Button>입력 완료!</Button>
      </S.ButtonContainer>
      <S.GNBContainer>
        <GlobalNavigation nowPage={1} />
      </S.GNBContainer>
    </S.Container>
  );
};

export default ThemeSelect;
