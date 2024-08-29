import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BizCardDetailView from "./components/BizcardDetailView";

function App() {

  return (
    <Router>
     <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: '#181818' }}>
      <Routes>
        <Route path="/get-bizcard/:bizcard_id" element={<BizCardDetailView />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App
