import "../styles/Features.css";

import {
  BrainCircuit,
  MonitorPlay,
  Gamepad2,
  Network,
} from "lucide-react";

function Features() {
  return (
    <section className="features">

      <div className="features-header">

        <p>WHY DSAce IS DIFFERENT</p>

        <h2>
          Not Just Notes. <br />
          Experience DSA Concepts.
        </h2>

      </div>

      <div className="features-grid">

        <div className="feature-card">

          <div className="feature-icon">
            <BrainCircuit size={34} />
          </div>

          <h3>Visual Learning</h3>

          <p>
            Understand trees, graphs, and recursion through animations,
            simulations, and interactive visuals.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <MonitorPlay size={34} />
          </div>

          <h3>Interactive Simulations</h3>

          <p>
            Watch sorting algorithms, graph traversals, and dynamic
            programming unfold in real-time.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <Gamepad2 size={34} />
          </div>

          <h3>Gamified Experience</h3>

          <p>
            Progress through DSA topics with quizzes, streaks,
            and visual rewards.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">
            <Network size={34} />
          </div>

          <h3>Real Understanding</h3>

          <p>
            Build intuition for data structures and algorithms —
            not just memorization.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;
