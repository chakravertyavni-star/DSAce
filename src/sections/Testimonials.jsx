import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Arjun",
    role: "2nd Year CSE",
    text: "Finally understood recursion and tree traversals after struggling for months.",
  },

  {
    name: "Kritika",
    role: "3rd Year CSE",
    text: "Dynamic programming finally clicked — the visualizations made all the difference.",
  },

  {
    name: "Rohan",
    role: "1st Year CSE",
    text: "This makes learning DSA genuinely addictive. Graphs used to scare me.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-header">

        <p>LOVED BY STUDENTS</p>

        <h2>
          Finally, DSA <br />
          Makes Sense.
        </h2>

      </div>

      <div className="testimonials-grid">

        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="quote">
              “
            </div>

            <p className="testimonial-text">
              {item.text}
            </p>

            <div className="testimonial-user">

              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;
