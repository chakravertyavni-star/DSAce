import { useParams } from "react-router-dom";
import { useState } from "react";

import "../styles/SubjectDetail.css";

const subjectTopics = {
  dsa: [
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "Hashing",
    "Heap",
    "Recursion",
    "Dynamic Programming",
  ],

  os: [
    "Processes",
    "Threads",
    "CPU Scheduling",
    "Deadlocks",
    "Paging",
    "Virtual Memory",
    "File Systems",
  ],

  dbms: [
    "SQL",
    "Normalization",
    "Transactions",
    "Indexing",
    "Joins",
    "Keys",
  ],

  cn: [
    "OSI Model",
    "TCP/IP",
    "Routing",
    "DNS",
    "HTTP",
  ],

  oop: [
    "Classes",
    "Inheritance",
    "Polymorphism",
    "Abstraction",
  ],

  ai: [
    "Machine Learning",
    "Neural Networks",
    "Deep Learning",
    "Generative AI",
  ],
};

const videos = {
  dsa: "/video1.mp4",
  os: "/video2.mp4",
  dbms: "/video3.mp4",
  cn: "/video4.mp4",
  oop: "/video5.mp4",
  ai: "/ai.mp4",
};

function SubjectDetail() {
  const { subjectId } = useParams();

  const topics = subjectTopics[subjectId] || [];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      (prev + 1) % topics.length
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      (prev - 1 + topics.length) % topics.length
    );
  };

  const getVisibleCards = () => {
    const cards = [];

    for (let i = -2; i <= 2; i++) {
      const index =
        (activeIndex + i + topics.length) %
        topics.length;

      cards.push({
        topic: topics[index],
        realIndex: index,
        position: i,
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
        className="subject-video-bg"
      >
        <source
          src={videos[subjectId]}
          type="video/mp4"
        />
      </video>

      <div className="subject-overlay"></div>

      {/* HEADER */}

      <div className="subject-detail-header">

        <p>SUBJECT ROADMAP</p>

        <h1>
          {subjectId.toUpperCase()}
        </h1>

        <span>
          Learn through immersive visual experiences,
          AI explanations and interactive quizzes.
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

          {getVisibleCards().map((card, index) => (

            <div
              key={index}
              className={`topic-card pos-${card.position}`}
            >

              <div className="topic-glow"></div>

              <div className="topic-top">

                <span>
                  Topic {card.realIndex + 1}
                </span>

                <p>
                  {card.realIndex <= 1
                    ? "IN PROGRESS"
                    : "LOCKED"}
                </p>

              </div>

              <div className="topic-center">

                <h2>{card.topic}</h2>

              </div>

              <div className="topic-bottom">

                <div className="topic-progress">

                  <div
                    className="topic-progress-fill"
                    style={{
                      width:
                        card.realIndex === 0
                          ? "100%"
                          : card.realIndex === 1
                          ? "60%"
                          : "0%",
                    }}
                  ></div>

                </div>

                <button>

                  {card.realIndex <= 1
                    ? "Continue"
                    : "Start"}

                </button>

              </div>

            </div>

          ))}

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