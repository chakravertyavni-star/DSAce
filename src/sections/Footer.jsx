import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>
          DSA<span>ce</span>
        </h2>

        <p>
          The interactive way to master Computer Science.
        </p>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 CSE.Visualized
        </span>

        <div className="footer-links">

          <a href="/">Home</a>
          <a href="/subjects">Subjects</a>
          <a href="/progress">Progress</a>
          <a href="/roadmap">Roadmap</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;