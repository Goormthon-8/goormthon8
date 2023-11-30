import { BrowserRouter, Route, Routes } from "react-router-dom";

import StickerPage from "./pages/Sticker";
import Start from "./pages/Start";
import StampMake from "./pages/StampMake";
import Main from "./pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sticker" element={<StickerPage />} />
        <Route path="/test" element={<Start />} />
        <Route path="/stampMake" element={<StampMake />} />
        <Route path="/test" element={<Main />} />
        <Route path="/sticker" element={<StickerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
