import { useEffect, useRef, useState } from "react";
import "../styles/Subjects.css";

function Subjects() {
  const ref = useRef(null);

  const [progress, setProgress] = useState(0);
  const [hasSpread, setHasSpread] = useState(false);

  useEffect(() => {
    let target = 0;
    let current = 0;

    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      const total = windowHeight * 2;

      const raw = Math.min(
        Math.max(-rect.top, 0),
        total
      );

      target = raw / total;

      if (target > 0.4) {
        setHasSpread(true);
      }
    };

    const animate = () => {
      current += (target - current) * 0.08;

      setProgress(current);

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);

    animate();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const ease = (t) => 1 - Math.pow(1 - t, 3);

  const rawSpread = ease(
    Math.min(progress / 0.4, 1)
  );

  const spread = hasSpread
    ? 1 - Math.pow(1 - rawSpread, 3)
    : rawSpread;

  const step1 = Math.min(progress / 0.33, 1);

  const step2 = Math.min(
    Math.max((progress - 0.33) / 0.33, 0),
    1
  );

  const step3 = Math.min(
    Math.max((progress - 0.66) / 0.34, 0),
    1
  );

  return (
    <section ref={ref} className="subjects">

      <div className="sticky-box">

        <p className="subtitle">
          Explore the future of learning
        </p>

        <h1
          className="number"
          style={{
            transform: `translateY(${(1 - step1) * 120}px)`,
            opacity: step1,
          }}
        >
          Data Structures
        </h1>

        {step1 > 0.98 && (
          <h1
            className="number"
            style={{
              transform: `translateY(${(1 - step2) * 120}px)`,
              opacity: step2,
            }}
          >
            Operating Systems
          </h1>
        )}

        {step2 > 0.98 && (
          <h1
            className="number"
            style={{
              transform: `translateY(${(1 - step3) * 120}px)`,
              opacity: step3,
            }}
          >
            Artificial Intelligence
          </h1>
        )}

        <FloatingIcons spread={spread} />

      </div>
    </section>
  );
}

function FloatingIcons({ spread }) {
  const icons = [
    { src: "/png1.svg", x: 440, y: -120 },

    { src: "/png2.svg", x: -540, y: 180 },

    { src: "/png3.svg", x: -240, y: 140 },

    { src: "/png4.svg", x: 260, y: 120 },

    { src: "/png5.svg", x: 460, y: 260 },

    { src: "/png6.svg", x: -260, y: -260 },

    { src: "/png7.svg", x: 120, y: -100 },
  ];

  return (
    <>
      {icons.map((icon, i) => (
        <div
          key={i}
          className="icon-wrapper"
          style={{
            transform: `
              translate(-50%, -50%)
              translate(${icon.x * spread}px, ${icon.y * spread}px)
            `,
            opacity: spread,
          }}
        >
          <div
            className={`float-layer ${
              spread > 0.95 ? "float-on" : ""
            } f${i}`}
          >
            <img
              src={icon.src}
              alt=""
              className="floating-icon"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Subjects;