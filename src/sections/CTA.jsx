import "../styles/CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-glow"></div>

      <div className="cta-content">

        <p>START YOUR DSA JOURNEY</p>

        <h2>
          Stop Memorizing. <br />
          Start Understanding.
        </h2>

        <span>
          Learn data structures and algorithms visually through
          simulations, animations, and interactive experiences.
        </span>
      <Link to="/subjects/dsa">
        <button>
          Start Learning DSA
        </button>
      </Link>

      </div>

    </section>
  );
}

export default CTA;
