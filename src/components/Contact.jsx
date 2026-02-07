import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si'

const CONTACT_LINKS = [
  { href: 'mailto:ryoyamam5129@gmail.com', label: 'Email', Icon: SiGmail },
  { href: 'https://github.com/StoneGiant0512', label: 'GitHub', Icon: SiGithub, external: true },
  { href: 'https://www.linkedin.com/in/ryo-yamada-484a173a9', label: 'LinkedIn', Icon: SiLinkedin, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="section section-contact reveal">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-lead">
            I'd be happy to connect! Feel free to reach out for project inquiries, collaboration opportunities, or any other questions you may have.
          </p>
          <div className="contact-links">
            {CONTACT_LINKS.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                className="contact-link contact-link-icon"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
