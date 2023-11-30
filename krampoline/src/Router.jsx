import { BrowserRouter, Route, Routes } from "react-router-dom";

import StickerPage from "./pages/Sticker";
import Start from "./pages/Start";
import StampMake from "./pages/StampMake";
import ThemeSelect from "./pages/ThemeSelect";
import MakeNew from "./pages/MakeNew";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/make-new" element={<MakeNew />} />
        <Route path="/theme-select" element={<ThemeSelect />} />
        <Route path="/stamp-make" element={<StampMake />} />
        <Route path="/sticker" element={<StickerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
