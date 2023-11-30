import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import StickerPage from "./pages/Sticker";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sticker" element={<StickerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
