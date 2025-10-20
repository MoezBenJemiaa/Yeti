import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import LoginPage from "./Login/YetiLogin";
import NotFoundPage from "./404/404";



function App() {
  return (
    <>
    <Router basename="/Yeti">
        <Routes>
          <Route path="/" element={<NotFoundPage />} />
          <Route path="/NF" element={<NotFoundPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
