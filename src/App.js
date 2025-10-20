import { Routes, Route, useParams, useLocation } from "react-router-dom";

import './App.css';
import LoginPage from "./Login/YetiLogin";
import NotFoundPage from "./404/404";



function App() {
  return (
    <>
      <Routes>
        <Route path="/NF" element={<NotFoundPage />} />
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
