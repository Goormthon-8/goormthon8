import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./StampMake.style";

const StampMake = () => {
  return (
    <S.Container>
      <S.AIContainer>생성형 AI 스탬프</S.AIContainer>
      <S.InputWhole>
        <S.InputContainer>
          <S.InputText>방문 장소</S.InputText>
          <Input placeholder="장소를 입력해주세요" />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputText>소감</S.InputText>
          <Input placeholder="장소를 방문한 소감을 작성해주세요" />
        </S.InputContainer>
      </S.InputWhole>
      <S.ButtonContainer>
        <Button>스템프 추가하기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default StampMake;
