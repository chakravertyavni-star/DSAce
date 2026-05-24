import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
 
import "../styles/AILearnPage.css";

function AILearnPage() {

  const {
    subjectId,
    topicName,
  } = useParams();

  const navigate = useNavigate();

  const [completed, setCompleted] =
    useState(false);

  /* TEMP DEBUG */

  const handleComplete = async () => {

    console.log("clicked");

    setCompleted(true);

  };

  return (

    <div className="ai-page">

      <div className="ai-overlay"></div>

      <div className="ai-container">

        {/* LEFT */}

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
              simplified concepts and
              intuitive learning flows.

              Learn deeply before moving
              to assessment.
            </p>

            <div className="ai-points">

              <div>
                ✓ Visual explanation
              </div>

              <div>
                ✓ Real-world analogy
              </div>

              <div>
                ✓ Concept clarity
              </div>

              <div>
                ✓ Guided learning
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="ai-right">

          <div className="video-shell">

            <div className="video-glow"></div>

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
                simulations and dynamic
                explanations will
                appear here.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}

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

                "http://cse-visualizer.onrender.com/api/topic-progress/update",

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