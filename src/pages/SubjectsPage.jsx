import "../styles/SubjectsPage.css";
import { Link } from "react-router-dom";

 const subjects = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    level: "Intermediate",
  },

  {
    id: "os",
    title: "Operating Systems",
    level: "Advanced",
  },

  {
    id: "dbms",
    title: "DBMS",
    level: "Intermediate",
  },

  {
    id: "cn",
    title: "Computer Networks",
    level: "Advanced",
  },

  {
    id: "oop",
    title: "Object Oriented Programming",
    level: "Beginner",
  },

  {
    id: "ai",
    title: "Artificial Intelligence",
    level: "Advanced",
  },
];

function SubjectsPage() {
  return (
    <div className="subjects-page">

      {/* Header */}
      <div className="subjects-page-header">

        <p>EXPLORE SUBJECTS</p>

        <h1>
          Learn Computer Science <br />
          Visually
        </h1>

      </div>

      {/* Grid */}
      <div className="subjects-page-grid">

        {subjects.map((subject, index) => (
          <div className="subjects-page-card" key={index}>

            <div className="subjects-card-glow"></div>

            <span className="subject-level">
              {subject.level}
            </span>

            <h2>{subject.title}</h2>

            <p>
              Interactive simulations, animations and
              intuitive visual explanations.
            </p>

            <Link  to={`/subjects/${subject.id}`}>

                <button>
                    Explore Subject
                </button>

            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SubjectsPage;