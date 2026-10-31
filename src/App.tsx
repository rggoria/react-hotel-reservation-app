import { BrowserRouter, Routes, Route } from "react-router";

import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/public/HomePage";
import RoomPage from "./pages/public/RoomPage";
import NotFoundPage from "./pages/public/NotFoundPage";
import AmenityPage from "./pages/public/AmenityPage";
import FoodPage from "./pages/public/FoodPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="rooms" element={<RoomPage />} />
          <Route path="amenities" element={<AmenityPage />} />
          <Route path="food" element={<FoodPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
