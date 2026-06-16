import "../styles/SubjectsPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import subjects from "../data/subjectsData";
import LoginPrompt from "../components/LoginPrompt";

const dsa = subjects[0];

function SubjectsPage() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const token = localStorage.getItem("token");

  const handleStart = () => {
    if (!token) {
      setShowLogin(true);
      return;
    }

    navigate(`/subjects/${dsa.id}`);
  };

  return (
    <div className="subjects-page">

      <div className="subjects-page-header">

        <p>
          DSA CURRICULUM
        </p>

        <h1>
          Master Data Structures
          <br />
          & Algorithms Visually
        </h1>

      </div>

      <div className="subjects-page-grid">

        <div className="subjects-page-card">

          <div className="subjects-card-glow"></div>

          <span className="subject-level">
            {dsa.level}
          </span>

          <h2>
            {dsa.title}
          </h2>

          <p>
            {dsa.topics.length} topics — from fundamentals to advanced
            problem-solving, with interactive simulations and visual
            explanations at every step.
          </p>

          <ul className="dsa-topic-preview">
            {dsa.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>

          <button onClick={handleStart}>
            Start DSA Journey
          </button>

        </div>

      </div>

      <LoginPrompt
        show={showLogin}
        setShow={setShowLogin}
      />

    </div>
  );
}

export default SubjectsPage;
