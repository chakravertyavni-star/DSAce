import "../styles/SubjectsPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginPrompt
from "../components/LoginPrompt";

const subjects = [

  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    level: "Intermediate",
  },

  {
    id: "os",
    title: "Operating Systems",
    level: "Advanced",
  },

  {
    id: "dbms",
    title: "DBMS",
    level: "Intermediate",
  },

  {
    id: "cn",
    title: "Computer Networks",
    level: "Advanced",
  },

  {
    id: "oop",
    title: "Object Oriented Programming",
    level: "Beginner",
  },

  {
    id: "ai",
    title: "Artificial Intelligence",
    level: "Advanced",
  },

];

function SubjectsPage() {

  const navigate =
    useNavigate();

  const [
    showLogin,
    setShowLogin
  ] =
    useState(false);

  const token =
    localStorage.getItem(
      "token"
    );

  return (

    <div className="subjects-page">

      {/* HEADER */}

      <div className="subjects-page-header">

        <p>
          EXPLORE SUBJECTS
        </p>

        <h1>
          Learn Computer Science
          <br />
          Visually
        </h1>

      </div>

      {/* GRID */}

      <div className="subjects-page-grid">

        {subjects.map(
          (
            subject,
            index
          ) => (

            <div
              className="subjects-page-card"
              key={index}
            >

              <div className="subjects-card-glow"></div>

              <span className="subject-level">

                {subject.level}

              </span>

              <h2>
                {subject.title}
              </h2>

              <p>

                Interactive simulations,
                animations and intuitive
                visual explanations.

              </p>

              <button

                onClick={() => {

                  if (!token) {

                    setShowLogin(
                      true
                    );

                    return;
                  }

                  navigate(
                    `/subjects/${subject.id}`
                  );

                }}

              >
                Explore Subject
              </button>

            </div>

          )
        )}

      </div>

      {/* LOGIN MODAL */}

      <LoginPrompt
        show={showLogin}
        setShow={setShowLogin}
      />

    </div>

  );
}

export default SubjectsPage;