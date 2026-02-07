export default function About() {
  return (
    <section id="about" className="section section-about reveal">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">
              I have 7 years of experience building web applications with AI-driven features.
            </p>
            <p>
              My core tech stacks are React, Node.js, Python, AWS, Docker, and LLM.
              I focus on full-stack development and bringing intelligent, scalable
              solutions from idea to production.
            </p>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <span className="about-card-label">Experience</span>
              <span className="about-card-value">7 years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
