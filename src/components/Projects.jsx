

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>AI Meal Analyzer — NutriLens</h3>
          <p>
            Tech Stack: React.js, Tailwind CSS, Node.js, Express.js,
            MongoDB, Gemini AI, Cloudinary, Multer
          </p>
          <a href="https://nutri-lens-project-three.vercel.app/" target= "_blank" className="project-demo">
            🎥 Watch Demo
          </a>
        </div>

        <div className="project-card">
          <h3>To-Do List</h3>
          <p>
            Tech Stack: HTML5, CSS3, JavaScript, LocalStorage
          </p>
          <a href="/videos/todolist.mp4" target="_blank" className="project-demo">
            🎥 Watch Demo
          </a>
        </div>

        <div className="project-card">
          <h3>Travel India Website</h3>
          <p>
            Tech Stack: HTML5, CSS3, JavaScript
          </p>
          <a href="/videos/travelwebsite.mp4" target="_blank" className="project-demo">
            🎥 Watch Demo
          </a>
        </div>

        <div className="project-card">
          <h3>Recipe Book Application</h3>
          <p>
            Tech Stack: HTML5, CSS3, React.js, Node.js, Express.js,
            MongoDB, Mongoose, JWT Authentication, bcrypt, REST APIs
          </p>
          <a className="project-demo">
            🎥 Watch Demo
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects