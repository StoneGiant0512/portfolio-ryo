export default function Hero() {
  return (
    <section id="home" className="section section-hero">
      <div className="hero-content">
        <img
          src="/me.png"
          alt=""
          className="hero-photo"
        />
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-title">Ryo Yamada</h1>
        <p className="hero-tagline">Senior Full Stack Software Engineer</p>
        <a href="#projects" className="btn btn-primary">
          View my work
        </a>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
