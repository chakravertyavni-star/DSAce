import { useParams } from "react-router-dom";

import {
  useState,
  useEffect
} from "react";

import axios from "axios";

import "../styles/SubjectDetail.css";

import subjects from "../data/subjectsData";
import { preloadVideo } from "../utils/preloadAssets";

function SubjectDetail() {

  const { subjectId } =
    useParams();

  const subject =
    subjects.find(
      (s) =>
        s.id === subjectId
    );

  const topics =
    subject?.topics || [];

  const video =
    subject?.video || "";

  const [
    activeIndex,
    setActiveIndex
  ] =
    useState(0);

  const [
    progress,
    setProgress
  ] =
    useState([]);

  /* FETCH PROGRESS */

  useEffect(() => {

    fetchProgress();

    if (video) {
      preloadVideo(video);
    }

  }, [subjectId, video]);

  const fetchProgress =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.get(

            `https://cse-visualizer.onrender.com/api/topic-progress/${subjectId}`,

            {

              headers: {

                Authorization:
                  `Bearer ${token}`

              }

            }

          );

        setProgress(
          res.data
        );

      } catch (
        error
      ) {

        console.log(
          error
        );

      }

    };

  /* SLIDER */

  const nextSlide =
    () => {

      setActiveIndex(

        (prev) =>

          (
            prev + 1
          ) %
          topics.length

      );

    };

  const prevSlide =
    () => {

      setActiveIndex(

        (prev) =>

          (
            prev -
            1 +
            topics.length
          ) %
          topics.length

      );

    };

  /* CARDS */

  const getVisibleCards =
    () => {

      const cards = [];

      for (
        let i = -2;
        i <= 2;
        i++
      ) {

        const index =

          (
            activeIndex +
            i +
            topics.length
          ) %
          topics.length;

        const currentTopic =

          progress.find(

            (p) =>
              p.topicName ===
              topics[index]

          );

        const previousTopic =

          progress.find(

            (p) =>
              p.topicName ===
              topics[index - 1]

          );

        const unlocked =

          index === 0 ||

          previousTopic?.quizCompleted;

        cards.push({

          topic:
            topics[index],

          realIndex:
            index,

          position:
            i,

          unlocked,

          currentTopic,

        });

      }

      return cards;

    };

  return (

    <div className="subject-detail">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="subject-video-bg"
      >

        <source
          src={video}
          type="video/mp4"
        />

      </video>

      <div className="subject-overlay"></div>

      {/* HEADER */}

      <div className="subject-detail-header">

        <p>
          SUBJECT ROADMAP
        </p>

        <h1>
          {subject?.title}
        </h1>

        <span>

          Learn through immersive
          visual experiences,
          AI explanations and
          interactive quizzes.

        </span>

      </div>

      {/* CAROUSEL */}

      <div className="carousel-container">

        {/* LEFT */}

        <button
          className="nav-btn left-btn"
          onClick={prevSlide}
        >
          ←
        </button>

        {/* CARDS */}

        <div className="carousel-track">

          {getVisibleCards().map(

            (
              card,
              index
            ) => (

              <div
                key={index}
                className={`topic-card pos-${card.position}`}
              >

                <div className="topic-glow"></div>

                <div className="topic-top">

                  <span>

                    Topic {
                      card.realIndex + 1
                    }

                  </span>

                  <p>

                    {card.unlocked
                      ? "UNLOCKED"
                      : "LOCKED"}

                  </p>

                </div>

                <div className="topic-center">

                  <h2>
                    {card.topic}
                  </h2>

                </div>

                <div className="topic-bottom">

                  <div className="topic-progress">

                    <div
                      className="topic-progress-fill"
                      style={{

                        width:

                          card.currentTopic?.quizCompleted
                            ? "100%"

                            : card.currentTopic?.aiCompleted
                            ? "50%"

                            : "0%",

                      }}
                    ></div>

                  </div>

                  <button

                    disabled={
                      !card.unlocked
                    }

                    onClick={() => {

                      if (
                        !card.unlocked
                      )
                        return;

                      window.location.href =

                        `/topic/${subjectId}/${encodeURIComponent(card.topic)}`;

                    }}

                  >

                    {card.unlocked
                      ? "Continue"
                      : "Locked"}

                  </button>

                </div>

              </div>

            )
          )}

        </div>

        {/* RIGHT */}

        <button
          className="nav-btn right-btn"
          onClick={nextSlide}
        >
          →
        </button>

      </div>

    </div>

  );
}

export default SubjectDetail;