import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
