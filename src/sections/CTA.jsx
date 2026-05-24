import "../styles/CTA.css";

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
      <link to="/subjects">
        <button>
          Start Learning Now
        </button>
      </link>

      </div>

    </section>
  );
}

export default CTA;