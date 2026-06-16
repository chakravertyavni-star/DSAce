import { useEffect, useState } from "react";

import axios from "axios";

import subjects from "../data/subjectsData";

import "../styles/Progress.css";

const dsa = subjects[0];

function ProgressPage() {
  const [overallPercent, setOverallPercent] = useState(0);
  const [topicProgress, setTopicProgress] = useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `https://cse-visualizer.onrender.com/api/topic-progress/${dsa.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const progressMap = {};
      res.data.forEach((row) => {
        progressMap[row.topicName] = row;
      });

      const topics = dsa.topics.map((topicName) => {
        const row = progressMap[topicName] || {};
        const aiDone = row.aiCompleted || false;
        const quizDone = row.quizCompleted || false;
        const percent = quizDone ? 100 : aiDone ? 50 : 0;

        return {
          name: topicName,
          aiDone,
          quizDone,
          percent,
        };
      });

      const totalModes = dsa.topics.length * 2;
      let completed = 0;

      topics.forEach((topic) => {
        if (topic.aiDone) completed++;
        if (topic.quizDone) completed++;
      });

      setOverallPercent(
        Math.round((completed / totalModes) * 100)
      );
      setTopicProgress(topics);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="progress-page">

      <h1 className="progress-title">
        Your DSA Progress
      </h1>

      <div className="progress-overall">

        <div className="progress-card progress-card-overall">

          <h2>
            {dsa.title}
          </h2>

          <div className="semi-circle-container">

            <div
              className="semi-circle"
              style={{
                background:
                  `conic-gradient(
                    #7c3aed
                    ${overallPercent * 1.8}deg,
                    rgba(255,255,255,0.08)
                    0deg
                  )`,
              }}
            >

              <div className="semi-inner">

                <span>
                  {overallPercent}%
                </span>

              </div>

            </div>

          </div>

          <p className="progress-summary">
            {topicProgress.filter((t) => t.quizDone).length} of{" "}
            {dsa.topics.length} topics completed
          </p>

        </div>

      </div>

      <div className="topic-progress-list">

        <h3 className="topic-progress-heading">
          Topic Breakdown
        </h3>

        {topicProgress.map((topic) => (
          <div className="topic-progress-row" key={topic.name}>

            <div className="topic-progress-info">

              <span className="topic-progress-name">
                {topic.name}
              </span>

              <div className="topic-progress-modes">
                <span className={topic.aiDone ? "mode-done" : ""}>
                  AI {topic.aiDone ? "✓" : "○"}
                </span>
                <span className={topic.quizDone ? "mode-done" : ""}>
                  Quiz {topic.quizDone ? "✓" : "○"}
                </span>
              </div>

            </div>

            <div className="topic-progress-bar-track">

              <div
                className="topic-progress-bar-fill"
                style={{ width: `${topic.percent}%` }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ProgressPage;
