import { useState, useEffect } from "react";
import "../styles/Roadmap.css";
import subjects from "../data/subjectsData";

const dsaTopics = subjects[0].topics;

const quotes = [
  "Consistency beats intensity.",
  "One solved problem today beats ten tomorrow.",
  "Master the basics. The advanced will follow.",
  "Every expert once struggled with Arrays.",
  "Small progress is still progress.",
];

function Roadmap() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("dsace-roadmap");

    if (saved) {
      setSelectedTopics(JSON.parse(saved));
    }

    setQuote(
      quotes[Math.floor(Math.random() * quotes.length)]
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "dsace-roadmap",
      JSON.stringify(selectedTopics)
    );
  }, [selectedTopics]);

  const addTopic = (topic) => {
    if (
      selectedTopics.some(
        (item) => item.topic === topic
      )
    )
      return;

    setSelectedTopics([
      ...selectedTopics,
      {
        topic,
        date: "",
        completed: false,
      },
    ]);
  };

  const removeTopic = (topic) => {
    setSelectedTopics(
      selectedTopics.filter(
        (item) => item.topic !== topic
      )
    );
  };

  const toggleComplete = (topic) => {
    setSelectedTopics(
      selectedTopics.map((item) =>
        item.topic === topic
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  const updateDate = (topic, value) => {
    setSelectedTopics(
      selectedTopics.map((item) =>
        item.topic === topic
          ? {
              ...item,
              date: value,
            }
          : item
      )
    );
  };

  const progress =
    selectedTopics.length === 0
      ? 0
      : Math.round(
          (selectedTopics.filter(
            (item) => item.completed
          ).length /
            selectedTopics.length) *
            100
        );

  return (
    <section className="roadmap">

      <div className="roadmap-glow glow1"></div>
      <div className="roadmap-glow glow2"></div>

      <div className="roadmap-header">

        <p>BUILD YOUR DSA MISSION</p>

        <h2>
          Create Your Own
          <span> Learning Path</span>
        </h2>

        <h4>{quote}</h4>

      </div>

      <div className="progress-card">

        <div className="progress-top">
          <span>Mission Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

      </div>

      <div className="roadmap-layout">

        <div className="topic-library">

          <h3>Available Topics</h3>

          {dsaTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => addTopic(topic)}
              className="topic-btn"
            >
              + {topic}
            </button>
          ))}

        </div>

        <div className="mission-builder">

          <h3>My Mission Path</h3>

          {selectedTopics.length === 0 ? (
            <div className="empty-state">
              Select topics to start your roadmap.
            </div>
          ) : (
            selectedTopics.map((item, index) => (
              <div
                className={`mission-node ${
                  item.completed
                    ? "completed"
                    : ""
                }`}
                key={item.topic}
              >
                <div className="node-number">
                  {index + 1}
                </div>

                <div className="node-content">

                  <h4>{item.topic}</h4>

                  <input
                    type="date"
                    value={item.date}
                    onChange={(e) =>
                      updateDate(
                        item.topic,
                        e.target.value
                      )
                    }
                  />

                  <div className="node-buttons">

                    <button
                      onClick={() =>
                        toggleComplete(
                          item.topic
                        )
                      }
                    >
                      {item.completed
                        ? "Completed ✓"
                        : "Mark Done"}
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        removeTopic(
                          item.topic
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

      </div>

    </section>
  );
}

export default Roadmap;