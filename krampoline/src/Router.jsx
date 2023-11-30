import { BrowserRouter, Route, Routes } from "react-router-dom";

import StickerPage from "./pages/Sticker";
import Start from "./pages/Start";
import StampMake from "./pages/StampMake";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/stampMake" element={<StampMake />} />
        <Route path="/sticker" element={<StickerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
