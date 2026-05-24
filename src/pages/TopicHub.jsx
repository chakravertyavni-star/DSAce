import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/TopicHub.css";

function TopicHub() {

  const {
    subjectId,
    topicName,
  } = useParams();

  const navigate =
    useNavigate();

  const [showModal,
    setShowModal] =
    useState(false);

  // TEMP fake state
  // later comes from backend

  const aiCompleted =
    false;

  const handleQuiz =
    () => {

      if (!aiCompleted) {

        setShowModal(true);

        return;
      }

      navigate(
        `/quiz/${subjectId}/${encodeURIComponent(topicName)}`
      );

    };

  return (

    <div className="topic-hub">

      <div className="topic-hub-overlay"></div>

      <div className="topic-hub-content">

        <p>
          {subjectId.toUpperCase()}
        </p>

        <h1>
          {decodeURIComponent(topicName)}
        </h1>

        <span>
          Choose how you want to learn
        </span>

        <div className="hub-grid">

          {/* LEARN */}

          <div className="hub-card">

            <h2>
              Learn with AI
            </h2>

            <p>
              Understand visually and
              conceptually.
            </p>

            <button
              onClick={() =>
                navigate(
                  `/learn/${subjectId}/${encodeURIComponent(topicName)}`
                )
              }
            >
              Start Learning
            </button>

          </div>

          {/* QUIZ */}

          <div className="hub-card">

            <h2>
              Quiz
            </h2>

            <p>
              Test your knowledge and
              improve retention.
            </p>

            <button
              onClick={handleQuiz}
            >
              Take Quiz
            </button>

          </div>

        </div>

      </div>

      {/* MODAL */}

      {showModal && (

        <div className="modal-backdrop">

          <div className="warning-modal">

            <h2>
              Learn First?
            </h2>

            <p>
              You haven't completed
              AI learning yet.
              <br />
              Proceed without
              understanding first?
            </p>

            <div className="modal-actions">

              {/* LEARN */}

              <button
                className="learn-btn"
                onClick={() => {

                  setShowModal(false);

                  navigate(
                    `/learn/${subjectId}/${encodeURIComponent(topicName)}`
                  );

                }}
              >
                Learn First
              </button>

              {/* CONTINUE */}

              <button
                className="continue-btn"
                onClick={() => {

                  setShowModal(false);

                  navigate(
                    `/quiz/${subjectId}/${encodeURIComponent(topicName)}`
                  );

                }}
              >
                Continue Anyway
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default TopicHub;