import { Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar";

import Home from "./pages/Home";
import SubjectsPage from "./pages/SubjectsPage";
import SubjectDetail from "./pages/SubjectDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/subjects"
          element={<SubjectsPage />}
        />

        <Route
          path="/subjects/:subjectId"
          element={<SubjectDetail />}
        />

      </Routes>
    </>
  );
}

export default App;