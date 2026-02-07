import { SiReact, SiNodedotjs, SiPython, SiAmazonwebservices, SiDocker, SiHuggingface } from 'react-icons/si'

const TECH_STACK = [
  { name: 'React', Icon: SiReact, color: '#61dafb' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', Icon: SiPython, color: '#3776ab' },
  { name: 'AWS', Icon: SiAmazonwebservices, color: '#ff9900' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
  { name: 'LLM', Icon: SiHuggingface, color: '#ffd21e' },
]

export default function Skills() {
  return (
    <section id="skills" className="section section-skills reveal">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {TECH_STACK.map(({ name, Icon, color }) => (
            <div key={name} className="skills-item" title={name}>
              <span className="skills-icon">
                <Icon style={{ color }} aria-hidden />
              </span>
              <span className="skills-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
