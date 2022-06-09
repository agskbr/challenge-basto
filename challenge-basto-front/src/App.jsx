import "./App.css";
import AdminPage from "./views/AdminPage/AdminPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<div>Not found page</div>} />
        <Route path="/" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
