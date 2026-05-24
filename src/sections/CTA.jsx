import "../styles/CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      {/* Glow */}
      <div className="cta-glow"></div>

      <div className="cta-content">

        <p>START YOUR JOURNEY</p>

        <h2>
          Stop Memorizing. <br />
          Start Understanding.
        </h2>

        <span>
          Learn Computer Science visually through simulations,
          animations and interactive experiences.
        </span>
      <Link to="/subjects">
        <button>
          Start Learning Now
        </button>
      </Link>

      </div>

    </section>
  );
}

export default CTA;