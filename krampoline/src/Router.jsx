import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import StickerPage from "./pages/Sticker";

import Start from "./pages/Start";
import StampMake from "./pages/StampMake";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/sticker" element={<StickerPage />} />
        <Route path="/" element={<Start />} />
        <Route path="/stampMake" element={<StampMake />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
