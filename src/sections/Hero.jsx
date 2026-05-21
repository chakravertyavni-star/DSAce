import { motion } from "framer-motion";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      {/* Background Glow */}
      <div className="hero-bg-glow"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-tag"
          >
            The future of learning Computer Science
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Understand <br />
            Computer Science <br />
            <span>Visually.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-description"
          >
            Learn DSA, Operating Systems, DBMS, Networking and more
            through interactive simulations, animations and visual
            experiences designed for real understanding.
          </motion.p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Exploring
            </button>

            <Link to="/subjects">
              <button className="secondary-btn">
                View Subjects
              </button>
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="hero-right"
        >

          <div className="hero-glow"></div>

          <img
            src="/computer.png"
            alt="Computer"
            className="hero-image"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;