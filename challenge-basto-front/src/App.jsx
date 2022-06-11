import "./App.css";
import AdminPage from "./views/AdminPage/AdminPage";
import { Routes, Route } from "react-router-dom";
import EditPage from "./views/EditPage/EditPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<div>Not found page</div>} />
        <Route path="/" element={<AdminPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
