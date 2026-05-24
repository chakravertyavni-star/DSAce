import {

  useEffect,
  useState

} from "react";

import axios from "axios";

import subjects
from "../data/subjectsData";

import "../styles/Progress.css";

function ProgressPage() {

  const [
    progressData,
    setProgressData
  ] =
    useState([]);

  useEffect(() => {

    fetchProgress();

  }, []);

  const fetchProgress =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const allProgress =
          await Promise.all(

            subjects.map(
              async (
                subject
              ) => {

                const res =
                  await axios.get(

                    `http://cse-visualizer.onrender.com/api/topic-progress/${subject.id}`,

                    {

                      headers: {

                        Authorization:
                          `Bearer ${token}`

                      }

                    }
                  );

                const totalModes =
                  subject.topics.length * 2;

                let completed =
                  0;

                res.data.forEach(
                  (
                    topic
                  ) => {

                    if (
                      topic.aiCompleted
                    )
                      completed++;

                    if (
                      topic.quizCompleted
                    )
                      completed++;

                  }
                );

                const percent =
                  Math.round(

                    (
                      completed
                      /
                      totalModes
                    ) * 100

                  );

                return {

                  name:
                    subject.title,

                  progress:
                    percent,

                };

              }
            )
          );

        setProgressData(
          allProgress
        );

      } catch (
        error
      ) {

        console.log(
          error
        );

      }
    };

  return (

    <div className="progress-page">

      <h1 className="progress-title">
        Your Progress
      </h1>

      <div className="progress-grid">

        {progressData.map(

          (
            subject,
            index
          ) => (

            <div
              className="progress-card"
              key={index}
            >

              <h2>
                {
                  subject.name
                }
              </h2>

              <div className="semi-circle-container">

                <div
                  className="semi-circle"
                  style={{

                    background:

                      `conic-gradient(
                        #7c3aed
                        ${subject.progress * 1.8}deg,
                        rgba(255,255,255,0.08)
                        0deg
                      )`

                  }}
                >

                  <div className="semi-inner">

                    <span>

                      {
                        subject.progress
                      }%

                    </span>

                  </div>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default ProgressPage;