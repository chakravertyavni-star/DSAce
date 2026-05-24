import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
import axios from "axios";

import subjects from "../data/subjectsData";

import "../styles/QuizPage.css";

function QuizPage() {

  const {
    subjectId,
    topicName,
  } = useParams();

  const navigate =
    useNavigate();

  /* SUBJECT */

  const subject =
    subjects.find(
      (s) =>
        s.id === subjectId
    );

  const topics =
    subject?.topics || [];

  const currentTopicIndex =
    topics.findIndex(
      (t) =>
        t ===
        decodeURIComponent(
          topicName
        )
    );

  const nextTopic =
    topics[
      currentTopicIndex + 1
    ];

  /* TEMP QUIZ DATA */

  const questions =
    Array.from(
      { length: 10 },
      (_, i) => ({

        question:
          `Question ${
            i + 1
          } about ${decodeURIComponent(topicName)}`,

        options: [

          "Option A",
          "Option B",
          "Option C",
          "Option D",

        ],

        answer:
          "Option A",

      })
    );

  /* STATE */

  const [
    currentQuestion,
    setCurrentQuestion
  ] =
    useState(0);

  const [
    selected,
    setSelected
  ] =
    useState("");

  const [
    score,
    setScore
  ] =
    useState(0);

  const [
    finished,
    setFinished
  ] =
    useState(false);

  const question =
    questions[
      currentQuestion
    ];

  /* NEXT */

  const handleNext =
    async () => {

      let newScore =
        score;

      if (
        selected ===
        question.answer
      ) {

        newScore =
          score + 1;

        setScore(
          newScore
        );

      }

      /* LAST QUESTION */

      if (
        currentQuestion ===
        questions.length - 1
      ) {

        try {

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

              mode: "quiz",

            },

            {

              headers: {

                Authorization:
                  `Bearer ${token}`

              }

            }

          );

        } catch (
          error
        ) {

          console.log(
            error
          );

        }

        setFinished(
          true
        );

        return;
      }

      /* NEXT QUESTION */

      setCurrentQuestion(
        (prev) =>
          prev + 1
      );

      setSelected("");

    };

  /* RESULT */

  if (finished) {

    return (

      <div className="quiz-page">

        <div className="quiz-overlay"></div>

        <div className="quiz-result">

          <h1>
            Quiz Completed ✅
          </h1>

          <p>
            Your Score
          </p>

          <h2>
            {score} / 10
          </h2>

          {nextTopic ? (

            <button
              onClick={() =>
                navigate(
                  `/topic/${subjectId}/${encodeURIComponent(nextTopic)}`
                )
              }
            >
              Next Topic →
            </button>

          ) : (

            <button
              onClick={() =>
                navigate(
                  "/progress"
                )
              }
            >
              View Progress
            </button>

          )}

        </div>

      </div>

    );
  }

  return (

    <div className="quiz-page">

      <div className="quiz-overlay"></div>

      <div className="quiz-container">

        {/* LEFT */}

        <div className="quiz-left">

          <p>
            {subjectId.toUpperCase()}
          </p>

          <h1>
            Quiz Assessment
          </h1>

          <span>
            {decodeURIComponent(topicName)}
          </span>

          {/* BAR */}

          <div className="quiz-progress">

            <div
              className="quiz-progress-fill"
              style={{

                width:
                  `${(
                    (currentQuestion + 1)
                    / 10
                  ) * 100}%`

              }}
            ></div>

          </div>

          <small>

            Question {
              currentQuestion + 1
            } / 10

          </small>

          {/* CARD */}

          <div className="question-card">

            <h2>
              {
                question.question
              }
            </h2>

            <div className="options">

              {question.options.map(
                (
                  option,
                  index
                ) => (

                  <div
                    key={index}
                    className={`option ${
                      selected === option
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setSelected(
                        option
                      )
                    }
                  >

                    {option}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="quiz-right">

          <div className="quiz-info">

            <h2>
              Assessment Mode
            </h2>

            <p>

              10 questions.
              Learn deeply.
              Test honestly.

            </p>

            <div className="quiz-thought">

              “Testing reveals
              understanding.”

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <div className="quiz-footer">

        <button
          disabled={!selected}
          onClick={
            handleNext
          }
        >

          {currentQuestion === 9
            ? "Finish Quiz"
            : "Next Question →"}

        </button>

      </div>

    </div>

  );
}

export default QuizPage;