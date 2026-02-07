import { useState } from 'react'

const PROJECTS = [
  {
    id: 1,
    title: 'Ticketing Platform',
    description:
      'Official platform for booking football match tickets in Japan. Browse matches by club and division, view topics and announcements, and manage tickets with QR issuance.',
    live: 'https://www.jleague-ticket.jp/',
    code: null,
    image: '/jleague-ticket.png',
    challenges: [
      'Providing 1,000,000s of concurrent requests during popular match days and high-demand events while maintaining system stability and availability.',
      'Improving search and discovery to meet strict low-latency requirements so users can quickly find matches and availability.',
      'Improving the end-to-end booking experience by introducing ticket reservation flows and reducing friction at checkout.',
    ],
  },
  {
    id: 2,
    title: 'Job Board',
    description:
      'Job board platform for browsing and applying to opportunities. Search listings, filter by role and location, and manage applications.',
    live: 'https://careercross.com/',
    code: null,
    image: '/job-board.png',
    challenges: [
      'Delivering instant, relevant search across 20,000+ job postings and resumes with complex filtering and real-time updates.',
      'Balancing employer and candidate needs simultaneously while combating fraud, ensuring trust, and solving the classic marketplace chicken-and-egg problem.',
      'Scaling infrastructure to handle extreme traffic volatility and global compliance without compromising performance or data consistency.',
    ],
  },
  {
    id: 3,
    title: 'E‑commerce',
    description:
      'Health and wellness e‑commerce platform. Browse supplements, sports, beauty, and grocery with search, categories, specials, and secure checkout.',
    live: 'https://de.iherb.com/',
    code: null,
    image: '/ecommerce.png',
    challenges: [
      'Maintaining real-time inventory accuracy and preventing overselling during high-traffic sales events.',
      'Balancing personalized product recommendations with fast page loads and diverse discovery.',
      'Securing global payments and preventing fraud across multiple currencies and regulations.',
    ],
  },
]

export default function Projects() {
  const [hoveredProjectId, setHoveredProjectId] = useState(null)

  return (
    <section id="projects" className="section section-projects reveal">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt="" />
                ) : null}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {!project.challenges && (
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                    {project.code ? (
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    ) : null}
                  </div>
                )}
              </div>
              {project.challenges && hoveredProjectId === project.id && (
                <div className="project-modal" role="dialog" aria-label="Challenges">
                  <h4 className="project-modal-title">Challenges</h4>
                  <ul className="project-modal-list">
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-link"
                  >
                    Live
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
