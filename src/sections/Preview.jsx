import "../styles/Preview.css";

const previews = [
  {
    title: "Sorting Visualizer",
    desc: "Watch bubble, merge, and quick sort in real-time.",
  },

  {
    title: "Recursion Visualizer",
    desc: "See recursive calls and stack frames visually.",
  },

  {
    title: "Graph Traversal",
    desc: "Visualize BFS and DFS step by step on any graph.",
  },

  {
    title: "Tree Visualizer",
    desc: "Explore BST operations, rotations, and traversals live.",
  },
];

function Preview() {
  return (
    <section className="preview">

      <div className="preview-header">

        <p>LEARN BY SEEING</p>

        <h2>
          Interactive. Visual. <br />
          Addictive.
        </h2>

      </div>

      <div className="preview-grid">

        {previews.map((item, index) => (
          <div className="preview-card" key={index}>

            <div className="preview-animation">

              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <div className="bar bar4"></div>

            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Preview;
