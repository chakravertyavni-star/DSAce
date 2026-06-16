import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import "../styles/Hero.css";
import { preloadImage } from "../utils/preloadAssets";

const HERO_IMAGE = "/computer.png";

const floatingTopics = [
  { label: "Arrays", x: "8%", y: "18%", delay: 0 },
  { label: "Trees", x: "72%", y: "12%", delay: 0.15 },
  { label: "Graphs", x: "78%", y: "62%", delay: 0.3 },
  { label: "DP", x: "12%", y: "68%", delay: 0.45 },
];

const stats = [
  { value: "14", label: "Topics" },
  { value: "Visual", label: "Simulations" },
  { value: "AI + Quiz", label: "Per Topic" },
];

function Hero() {
  useEffect(() => {
    preloadImage(HERO_IMAGE);
  }, []);

  return (
    <section className="hero">

      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-bg-glow hero-bg-glow-1" aria-hidden="true" />
      <div className="hero-bg-glow hero-bg-glow-2" aria-hidden="true" />

      <div className="hero-container">

        <div className="hero-left">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            <Sparkles size={14} />
            <span>The future of learning DSA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-title"
          >
            Master Data Structures
            <span className="hero-title-accent">& Algorithms</span>
            <span className="hero-title-highlight">Visually.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="hero-description"
          >
            From arrays to dynamic programming — learn every core DSA
            concept through interactive simulations, animations, and
            visual experiences built for real understanding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="hero-stats"
          >
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="hero-buttons"
          >
            <Link to="/subjects/dsa" className="hero-btn hero-btn-primary">
              Start Learning DSA
              <ArrowRight size={18} />
            </Link>

            <Link to="/subjects" className="hero-btn hero-btn-secondary">
              View Curriculum
            </Link>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >

          <div className="hero-orbit hero-orbit-1" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-2" aria-hidden="true" />

          <div className="hero-visual-card">

            <div className="hero-code-snippet" aria-hidden="true">
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-dot" />
              <code>
                bfs(graph, start) {"{"}
                <br />
                &nbsp;&nbsp;queue.push(start);
                <br />
                &nbsp;&nbsp;// visualize step-by-step
                <br />
                {"}"}
              </code>
            </div>

            <motion.img
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={HERO_IMAGE}
              alt="DSA learning visual"
              className="hero-image"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />

          </div>

          {floatingTopics.map((topic) => (
            <motion.span
              key={topic.label}
              className="hero-topic-chip"
              style={{ left: topic.x, top: topic.y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.6 + topic.delay, duration: 0.4 },
                scale: { delay: 0.6 + topic.delay, duration: 0.4 },
                y: {
                  delay: 1 + topic.delay,
                  duration: 3 + topic.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {topic.label}
            </motion.span>
          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
