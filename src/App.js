import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="bg-[#001a33] px-5 md:px-10 2xl:px-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
