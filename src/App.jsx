import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./sections/Navbar";

import ProtectedRoute
from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubjectsPage from "./pages/SubjectsPage";
import SubjectDetail from "./pages/SubjectDetail";
import TopicHub from "./pages/TopicHub";
import AILearnPage from "./pages/AILearnPage";
import QuizPage from "./pages/QuizPage";
import ProgressPage from "./pages/ProgressPage";

function App() {

  return (

    <>

      <Navbar />

      <Routes>

        {/* PUBLIC */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* PROTECTED */}

        <Route
          path="/subjects"
          element={
            <ProtectedRoute>
              <SubjectsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/subjects/:subjectId"
          element={
            <ProtectedRoute>
              <SubjectDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/topic/:subjectId/:topicName"
          element={
            <ProtectedRoute>
              <TopicHub />
            </ProtectedRoute>
          }
        />

        <Route
          path="/learn/:subjectId/:topicName"
          element={
            <ProtectedRoute>
              <AILearnPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/:subjectId/:topicName"
          element={
            <ProtectedRoute>
              <QuizPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <ProgressPage />
            </ProtectedRoute>
          }
        />

      </Routes>

    </>

  );
}

export default App;