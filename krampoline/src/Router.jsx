import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import StampMake from "./pages/StampMake";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/stampMake" element={<StampMake />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
