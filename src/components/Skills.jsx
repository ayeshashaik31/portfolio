import React from 'react'

function Skills() {
  return (
    <section className='skills' id='skills'>
        <h1 className="section-title">Skills</h1>

        <div className='skills-container'>


           <div className="skill-card">
          <h3>Frontend</h3>
          <p>
            HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Redux,
            Tailwind CSS, Responsive Design
          </p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>
            Node.js, Express.js, REST APIs, JWT Authentication
          </p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>
            MongoDB, MySQL, SQL
          </p>
        </div>

        <div className="skill-card">
          <h3>ORM/ODM</h3>
          <p>Mongoose, Sequelize</p>
        </div>

        <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <p>
            Git, GitHub, Postman, MySQL Workbench
          </p>
        </div>

        <div className="skill-card">
          <h3>Soft Skills</h3>
          <p>
            Problem Solving, Teamwork, Time Management, Quick Learning,
            Self-Motivation, Continuous Learning
          </p>
        </div>
        </div>
      
    </section>
  )
}

export default Skills
