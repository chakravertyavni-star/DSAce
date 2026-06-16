import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>
          DSA<span>ce</span>
        </h2>

        <p>
          The interactive way to master Data Structures & Algorithms.
        </p>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 DSAce
        </span>

        <div className="footer-links">

          <a href="/">Home</a>
          <a href="/subjects">Curriculum</a>
          <a href="/progress">Progress</a>
          <a href="/subjects/dsa">Roadmap</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
