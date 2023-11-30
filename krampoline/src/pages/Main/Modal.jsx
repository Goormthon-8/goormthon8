import styled from "styled-components";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Modal = ({ part }) => {
  const navigate = useNavigate();

  const moveToStickerPage = () => {
    navigate("/sticker", { state: { page: part } });
  };

  console.log(part);
  const [active, setActive] = useState(true);
  useEffect(() => {
    if (part !== 0) {
      setActive(false);
    }
  }, [part]);
  return (
    <MainWrapper>
      <div className="title-box">
        <p>지역을 선택하고 스탬프를 생성해주세요</p>
      </div>
      <div className="list-box">
        <li className="text-green">
          <span className="text-green">1100고지 &nbsp;&nbsp;&nbsp;</span>
          <span className="text-gray">제주도 최고의 눈꽃명소</span>
        </li>
      </div>
      <ButtonWrapper>
        <Button
          children={"지역 선택하기"}
          onClick={moveToStickerPage}
          disabled={active}
        />
      </ButtonWrapper>
    </MainWrapper>
  );
};

export default Modal;

const MainWrapper = styled.div`
  width: 100vw;
  height: 45vh;

  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);

  .title-box {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 1.88rem 2rem;

    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    border-bottom: 1px solid #f3f1f1;
  }

  .text-green {
    color: #70a597;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .text-gray {
    color: #b6b6b6;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .list-box {
    margin: 1.44rem 2.25rem;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0 2rem;

  position: fixed;
  bottom: 10vh;
`;
