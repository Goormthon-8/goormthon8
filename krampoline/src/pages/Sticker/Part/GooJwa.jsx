import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { placeList } from "../placeList.js";
import { useEffect, useState } from "react";
import List from "../../../components/List/index.jsx";
import ListModal from "../../Main/List.jsx";

const GooJwa = () => {
  const location = useLocation();
  const imgUrl = location.state.imgUrl;
  const placeName = location.state.placeName;

  // image url
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");

  useEffect(() => {
    // get image url
    if (placeName === "함덕서우봉") {
      setUrl1(imgUrl);
    }
    if (placeName === "사려니숲길") {
      setUrl2(imgUrl);
    }
    if (placeName === "에코랜드 테마파크") {
      setUrl3(imgUrl);
    }
  }, [imgUrl, placeName]);

  // control animation
  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 10,
    delay: 0.5,
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <p>{placeList[3].name}</p>
      </TitleWrapper>
      <MapWrapper>
        {/* 지도 */}
        <img
          src={placeList[3].imgUrl}
          alt={placeList[3].name}
          className="map"
        />
        {/* 스티커 */}
        {/* 유채꽃프라자 */}
        {url1.length > 0 && (
          <motion.img
            src={url1}
            alt="유채꽃프라자"
            className="sticker1 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
        {/* 휴애리자연생활공원 */}
        {url2.length > 0 && (
          <motion.img
            src={url2}
            alt="휴애리자연생활공원"
            className="sticker2 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
        {/* 동백포레스트 */}
        {url3.length > 0 && (
          <motion.img
            src={url3}
            alt="동백포레스트"
            className="sticker3 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
      </MapWrapper>
      <ListModal />
    </MainWrapper>
  );
};

export default GooJwa;

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
  padding: 2rem 0;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MapWrapper = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;

  position: relative;

  background-color: #f9f9f9;
  .map {
    width: 60vw;
  }
  .sticker-fix {
    position: fixed;
    z-index: 10;
    width: 4rem;
    border-radius: 50%;
  }
  .sticker1 {
    top: 9rem;
    left: 8.5rem;
  }
  .sticker2 {
    top: 14.5rem;
    left: 5rem;
  }
  .sticker3 {
    top: 15rem;
    left: 9.5rem;
  }
`;
