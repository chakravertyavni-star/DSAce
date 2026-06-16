import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

import { FiMaximize2 } from "react-icons/fi";

import "../styles/AILearnPage.css";

function AILearnPage() {

  const [explanation,setExplanation]= useState("");

const [loading,setLoading]=useState(true);

  const {
    subjectId,
    topicName
  } = useParams();

  const navigate = useNavigate();

  const visualRef = useRef(null);

  const [completed, setCompleted] =
    useState(false);

  const handleComplete = async () => {

    console.log("clicked");

    setCompleted(true);

  };

  const handleFullscreen = async () => {

  try {

    if (!document.fullscreenElement) {

      await visualRef.current.requestFullscreen();

    } else {

      await document.exitFullscreen();

    }

  } catch (error) {

    console.error(error);

  }

};

  return (

    <div className="ai-page">

      <div className="ai-overlay"></div>

      <div className="ai-container">

        <div className="ai-left">

          <p className="ai-subject">
            {subjectId.toUpperCase()}
          </p>

          <h1>
            {decodeURIComponent(topicName)}
          </h1>

          <span className="ai-tag">
            AI Guided Learning
          </span>

          <div className="ai-text-card">

            <h2>
              Understanding the Topic
            </h2>

            <p>
              This section will contain
              AI-generated explanations,
              visual understanding,
              simplified concepts,
              real-world analogies,
              and intuitive learning
              flows designed specifically
              for mastering Data Structures
              and Algorithms.
            </p>

            <div className="ai-points">

              <div>
                ✓ AI Generated Explanation
              </div>

              <div>
                ✓ Visual Learning
              </div>

              <div>
                ✓ Real-world Analogies
              </div>

              <div>
                ✓ Concept Mastery
              </div>

            </div>

            {/* VISUAL SPACE */}

            <div
              className="video-shell"
              ref={visualRef}
            >

              <div className="video-glow"></div>

              <div
                className="fullscreen-btn"
                onClick={handleFullscreen}
              >
                <FiMaximize2 />
              </div>

              <div className="video-placeholder">

                <div className="video-motivation">

                  <span>
                    “Understanding today
                    creates confidence
                    tomorrow.”
                  </span>

                </div>

                <h2>
                  AI Visual Space
                </h2>

                <p>
                  Future AI videos,
                  simulations,
                  animated BFS/DFS,
                  tree traversals,
                  graph visualizations
                  and dynamic explanations
                  will appear here.
                </p>

                {/* DEMO VISUAL */}

                <div className="visual-demo">

                  <div className="visual-node">
                    A
                  </div>

                  <div className="visual-node">
                    B
                  </div>

                  <div className="visual-node">
                    C
                  </div>

                  <div className="visual-node">
                    D
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="ai-footer">

        {!completed ? (

          <button
            onClick={handleComplete}
          >
            Mark Learning Complete
          </button>

        ) : (

          <button

            onClick={async () => {

              const token =
                localStorage.getItem(
                  "token"
                );

              await axios.post(

                "https://cse-visualizer.onrender.com/api/topic-progress/update",

                {

                  subjectId,

                  topicName:
                    decodeURIComponent(
                      topicName
                    ),

                  mode: "ai",

                },

                {

                  headers: {

                    Authorization:
                      `Bearer ${token}`

                  }

                }

              );

              navigate(

                `/quiz/${subjectId}/${encodeURIComponent(topicName)}`

              );

            }}

          >
            Proceed to Quiz →
          </button>

        )}

      </div>

    </div>

  );

}

export default AILearnPage;