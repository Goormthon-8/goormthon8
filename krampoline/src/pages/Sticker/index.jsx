import { useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { placeList } from "./placeList.js";
import Button from "../../components/Button/index.jsx";

const StickerPage = () => {
  const location = useLocation();
  const page = location.state.page;

  // moving sticker
  const dragItemRef = useRef(null);
  const containerRef = useRef(null);

  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  const dragStart = (e) => {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragItemRef.current) {
      active = true;
    }
  };

  const dragEnd = (e) => {
    initialX = currentX;
    initialY = currentY;

    active = false;
  };

  const drag = (e) => {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItemRef.current);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <p>{placeList[page].name}</p>
      </TitleWrapper>
      <MapWrapper>
        {/* 지도 */}
        <img
          src={placeList[page].imgUrl}
          alt={placeList[page].name}
          className="map"
        />
        {/* 생성된 스탬프 */}
        <p className="title">생성된 스탬프</p>
        <div
          id="container"
          ref={containerRef}
          onTouchStart={dragStart}
          onTouchEnd={dragEnd}
          onTouchMove={drag}
          onMouseDown={dragStart}
          onMouseUp={dragEnd}
          onMouseMove={drag}
        >
          <img
            src="/assets/images/dummy-sticker.png"
            alt="sticker"
            id="item"
            ref={dragItemRef}
            style={{ width: "50px" }}
          />
        </div>
      </MapWrapper>

      {/* 스탬프 추가하기 */}
      <Button children="스탬프 추가하기" />
    </MainWrapper>
  );
};

export default StickerPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MapWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  .map {
    width: 80vw;
  }
  .title {
    padding-top: 4rem;
    padding-bottom: 1.75rem;

    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
