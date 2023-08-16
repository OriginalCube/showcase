import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
