import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();

  const moveToStickerPage = (page) => {
    navigate("/sticker", { state: { page: page } });
  };

  return (
    <MainWrapper>
      <div>
        <div className="flex-row">
          <img
            src="/assets/images/jeju-1.png"
            alt="jeju-1"
            className="img1"
            onClick={(e) => moveToStickerPage(1)}
          />
          <img
            src="/assets/images/jeju-2.png"
            alt="jeju-2"
            className="img2"
            onClick={(e) => moveToStickerPage(2)}
          />
          <img
            src="/assets/images/jeju-3.png"
            alt="jeju-3"
            className="img3"
            onClick={(e) => moveToStickerPage(3)}
          />
        </div>

        <div className="flex-row">
          <img
            src="/assets/images/jeju-6.png"
            alt="jeju-6"
            className="img6"
            onClick={(e) => moveToStickerPage(6)}
          />
          <img
            src="/assets/images/jeju-5.png"
            alt="jeju-5"
            className="img5"
            onClick={(e) => moveToStickerPage(5)}
          />
          <img
            src="/assets/images/jeju-4.png"
            alt="jeju-4"
            className="img4"
            onClick={(e) => moveToStickerPage(4)}
          />
        </div>
      </div>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  padding: 12rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .img1 {
    width: 8.92219rem;
    height: 7.73113rem;

    position: relative;
    left: 3rem;
    top: 1.3rem;
  }
  .img2 {
    width: 6.0705rem;
    height: 5.04581rem;
  }
  .img3 {
    width: 8.3015rem;
    height: 5.55938rem;

    position: relative;
    left: -2rem;
    top: -0.5rem;
  }
  .img4 {
    width: 9.86394rem;
    height: 8.204rem;

    position: relative;
    top: -6rem;
    left: 0.5rem;
  }
  .img5 {
    width: 5.93944rem;
    height: 5.11088rem;

    position: relative;
    top: -3rem;
    left: 3rem;
  }
  .img6 {
    width: 6.344rem;
    height: 5.22463rem;

    position: relative;
    top: -2rem;
    left: 4rem;
  }
`;
