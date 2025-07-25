const teamMembers = [
  {
    name: 'Walter White',
    role: 'Chief Executive Officer',
    img: './img/person/person-m-7.webp',
    description: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
    socials: ['facebook', 'twitter-x', 'linkedin', 'youtube'],
  },
  {
    name: 'Sarah Jhonson',
    role: 'Product Manager',
    img: './img/person/person-f-8.webp',
    description: 'Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut',
    socials: ['facebook', 'twitter-x', 'linkedin', 'youtube'],
  },
  //... agrega los demás
];

export default function TeamSection() {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <div><span>Check Our</span> <span className="description-title">Team</span></div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {teamMembers.map((member, idx) => (
            <TeamMember key={idx} {...member} delay={100 * (idx + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ name, role, img, description, socials, delay }) {
  return (
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="team-member d-flex">
        <div className="member-img">
          <img src={img} className="img-fluid" alt={name} loading="lazy" />
        </div>
        <div className="member-info flex-grow-1">
          <h4>{name}</h4>
          <span>{role}</span>
          <p>{description}</p>
          <div className="social">
            {socials.map((social, i) => (
              <a key={i} href="#">
                <i className={`bi bi-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
