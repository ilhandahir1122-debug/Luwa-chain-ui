import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Explorer from "./pages/Explorer";
import Wallet from "./pages/Wallet";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explorer />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}
