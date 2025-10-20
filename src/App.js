import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import LoginPage from "./Login/YetiLogin";
import NotFoundPage from "./404/404";



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="NF" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  );
}

export default App;
